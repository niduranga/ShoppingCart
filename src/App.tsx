import { Route, Routes } from "react-router";
import ProductList from "./components/product/ProductList.tsx";
import Cart from "./components/cart/Cart.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
};

export default App;
