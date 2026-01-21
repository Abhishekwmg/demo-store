import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setIsLoading(true)
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProduct();
    }, [id])

    if (!product) return null;

    if (isLoading) return <p>Loading...</p>


    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
        </div>
    )
}
