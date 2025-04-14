"use client";

import { useCart } from "../../components/context/CartContext";
import Image from "next/image";

import { Trash2, Plus, Minus } from 'lucide-react';

export default function cart() {
  const { cartItems } = useCart();

  return (
   
    <div className="bg-gray-100 w-full  p-4 mb-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
      
      {cartItems.map((item, i) => ( 
       /*  <div key={i} className="mb-2">
          <p>{item.category}</p>
           <Image
                      className="w-full h-48 object-cover mb-2"
                      src={item.thumbnail}
                      width={200}
                      height={200}
                      alt={`Bild ${item.title}`}
                    />
        </div> */
            <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            {/* Product Info */}
            <div className="flex items-center space-x-4">
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
                <button className="text-gray-600 hover:text-black">
                  <Minus size={18} />
                </button>
                <span className="px-3"></span>
                <button className="text-gray-600 hover:text-black">
                  <Plus size={18} />
                </button>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
     
  );
}
