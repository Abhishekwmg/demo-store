import { Routes, Route } from 'react-router-dom';
import Store from "./Store"
import ProductDetails from './ProductDetails';

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    <Store />
  </>
}