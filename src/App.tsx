import { Route, Routes } from "react-router";
import ProductList from "./components/ProductList.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
};

export default App;
