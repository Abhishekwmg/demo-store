import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
    const navigate = useNavigate();

    return (
        <li>
            <div style={{ width: "300px", background: "white", color: "#000" }}>
                <img src={product.thumbnail} alt="" />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.rating}</p>

                <button onClick={() => navigate(`/product/${product.id}`)}>
                    View
                </button>
            </div>
        </li>
    );
}