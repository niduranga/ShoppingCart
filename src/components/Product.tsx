import React from "react";
import type { IProductProps } from "../utilities/type/product";
const Product: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className="min-w-[250px] max-w-[250px] bg-gray-200 rounded-lg shadow-md p-4 mr-4 flex-shrink-0 hover:shadow-lg transition">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h1>
      <p className="text-gray-600 mb-4">Rs.{product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
