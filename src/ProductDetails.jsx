export default function ProductDetails({ p, view }) {
    return <>{view && <ul>
        <li key={p.id}>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <p>{p.description}</p>
        </li>
    </ul>}
    </>
}