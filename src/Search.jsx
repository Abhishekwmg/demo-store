export default function Search({ query, onQueryChange }) {
    return <>
        <input value={query} onChange={onQueryChange} type="text" placeholder="search for an item" />
    </>
}