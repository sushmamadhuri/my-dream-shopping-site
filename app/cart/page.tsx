"use client";

import { useCart } from "../../components/context/CartContext";
import Image from "next/image";
import { useAuth } from "@/components/context/AuthContext";
import { Trash2, Plus, Minus } from 'lucide-react';

export default function cart() {
  const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart, getQuantity } = useCart();
  const { isAuthenticated } = useAuth(); // 👈 use the context here

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Please login to view your cart 🛒
        </p>
      </div>
    );
  }

  return (

    <div className="bg-gray-100 lg:w-5/6 p-5 mt-10 lg:p-15 lg:m-8 lg:ml-30 rounded-md shadow-md m-2 width-full">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

      {cartItems.map((item, i) => (
        <div
          key={item.id}
          className="flex items-center w-full  justify-between border-b py-4 m-0 "
        >
          {/* Product Info */}
          <div className="flex items-center lg:space-x-4">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Quantity + Delete */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border px-2 py-1 rounded">
              <button className="text-gray-600 hover:text-black"
                onClick={() => decreaseQuantity(item.id)}>
                <Minus size={18} />
              </button>
              <span className="px-3">{getQuantity(item.id)}</span>
              <button className="text-gray-600 hover:text-black"
                onClick={() => increaseQuantity(item.id)}>
                <Plus size={18} />
              </button>
            </div>
            <button className="text-red-500 hover:text-red-700"
              onClick={() => removeFromCart(item.id)}>
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>

  );
}
