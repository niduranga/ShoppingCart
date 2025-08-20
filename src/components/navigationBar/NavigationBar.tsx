import React from "react";
import { NavLink } from "react-router";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";

const NavigationBar: React.FC = () => {
  const cartProductLength = useSelector((state: RootState) => state.cart.products)
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg mb-2">
      <div>
        <NavLink
          to="/"
          className="text-white text-xl font-semibold tracking-wide hover:text-yellow-300 transition-colors duration-300"
        >
          🛍️ Shopping Items
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/cart"
          className="relative text-white hover:text-yellow-300 transition-colors duration-300"
        >
          <TiShoppingCart className="text-3xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5">
            {
              cartProductLength.length
            }
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
