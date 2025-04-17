'use client'

import { useCart } from '@/components/context/CartContext';
import { Product } from '@/interfaces/product-interfaces';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const { cartItems, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, getQuantity } = useCart();
  const [showAddedTooltip, setShowAddedTooltip] = useState(false);

  const showTooltip = () => {
    setShowAddedTooltip(true);
    setTimeout(() => setShowAddedTooltip(false), 800);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cartIcon = document.getElementById("cart-icon");

    if (cartIcon) {
      const cartRect = cartIcon.getBoundingClientRect();

      const deltaX = cartRect.left - rect.left;
      const deltaY = cartRect.top - rect.top;

    }

    addToCart(product);
    showTooltip(); // for tooltip
  };

  return (
    <div className="flex items-center justify-between mt-0  pt-1 w-full bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold py-1 px-4 rounded-lg  transition" >
      <button className="transition-transform transform hover:scale-110 active:scale-90 duration-200 ease-in-out cursor-pointer"
        onClick={() => decreaseQuantity(product.id)}>
        <Minus strokeWidth={3} />
      </button>

      {/*  <button className="cursor-pointer "
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button> */}
      <div className="relative">
        <button
          className="cursor-pointer transition active:scale-95 duration-150"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {showAddedTooltip && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white w-full text-black 
        text-xs px-2 py-1 rounded shadow transition-opacity duration-1">
            Added
          </div>
        )}
      </div>
      <button className="transition-transform transform hover:scale-110 active:scale-90 duration-200 ease-in-out cursor-pointer"
        onClick={() => increaseQuantity(product.id)}>
        <Plus strokeWidth={3} />
      </button>
    </div>
  );
}
