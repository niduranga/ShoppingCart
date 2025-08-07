import React from "react";
import { products } from "../data/products.ts";
import Product from "./Product.tsx";

const ProductList: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Products</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
