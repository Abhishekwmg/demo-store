// import products from './data'
import Products from './Products'
import Search from './Search'
import { useState, useEffect } from 'react'

export default function Store() {

    const [query, setQuery] = useState("");
    const [fetchedProductData, setFetchedProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleQueryChange(e) {
        setQuery(e.target.value)
    }



    useEffect(() => {
        if (!query) return;

        const controller = new AbortController();

        async function fetchData() {
            try {
                setIsLoading(true);
                const f = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=0`, { signal: controller.signal })
                const d = await f.json();
                setFetchedProductData(d.products);
                setIsLoading(false);
            } catch (e) {
                if (e.name !== "AbortController") {
                    console.log(e)
                }
            }
        }

        fetchData();

        return () => controller.abort();

    }, [query])


    return <>
        <Search query={query} onQueryChange={handleQueryChange} />
        {isLoading && <p>Loading...</p>}
        <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            {fetchedProductData && fetchedProductData.length > 0 &&
                fetchedProductData.map((product => {
                    return <Products key={product.id} product={product} />
                }))
            }
        </ul>


    </>
}