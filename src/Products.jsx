import { useState } from "react"
import ProductDetails from "./ProductDetails";

export default function Products({ product }) {

    const [isDetailedView, setIsDetailedView] = useState(false);

    return <li>
        <div style={{ width: "300px", background: "white", color: "#000" }}>
            <img src={product.thumbnail} alt="" />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <button onClick={() => setIsDetailedView(!isDetailedView)}>view</button>
            <ProductDetails p={product} view={isDetailedView} />
        </div>
    </li>
}