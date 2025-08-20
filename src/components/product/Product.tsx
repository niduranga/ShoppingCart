import React from "react";
import type { IProductProps } from "../../utilities/type/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice.ts";

const Product: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="min-w-[250px] max-w-[250px] bg-gray-200 rounded-lg shadow-md p-4 mr-4 flex-shrink-0 hover:shadow-lg transition">
      <div className="w-full h-40 mb-3 overflow-hidden rounded-md">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {product.name}
      </h2>
      <p className="text-gray-700 mb-4">Rs. {product.price}</p>
      <button
        type="button"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        onClick={()=> dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
