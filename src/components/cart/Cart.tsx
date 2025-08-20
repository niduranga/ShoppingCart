import React from "react";
import { useSelector } from "react-redux";
import type { IProduct } from "../../utilities/type/product";
import type { RootState } from "../../store/store.ts";
import { Link } from "react-router";

const Cart: React.FC = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const totalPrice = cartProducts.reduce((productCount, product) => {
    return productCount + product.price
  }, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartProducts.map((product: IProduct) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-indigo-600">Rs.{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right">
            <p className="text-xl font-bold text-gray-800">
              Total: <span className="text-indigo-600">Rs.{totalPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}

      <Link to="/" className="mt-5 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300 underline">Back</Link>
    </div>
  );
};

export default Cart;
