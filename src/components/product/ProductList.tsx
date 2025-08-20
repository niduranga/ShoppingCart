import React from "react";
import { products } from "../../data/products.ts";
import Product from "./Product.tsx";
import NavigationBar from "../navigationBar/NavigationBar.tsx";

const ProductList: React.FC = () => {
  return (
    <div className="px-4 py-6 min-h-screen">
      <NavigationBar />
      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-5">Products</h2>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap -mx-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6 px-3 mb-6 flex items-center justify-center"
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
