"use client";
import { Product } from "@/interfaces/product-interfaces";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from 'lucide-react';
import { useFavorite } from "../context/FavoriteContext";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export function Card({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite } = useFavorite();

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
    <li className="flex flex-col justify-between h-full bg-white w-full max-w-xs mb-11 p-4 border rounded-md shadow-md">
      <div className="bg-gray-100 w-full max-w-xs p-4 mb-6 rounded-md shadow-md">
        {/* Heart icon */}
        <button
          onClick={() => toggleFavorite(product)}
          className="absolute text-red-500 hover:scale-110 transition-transform"
        >
          <Heart fill={isFavorite(product.id) ? "red" : "none"} />
        </button>
        <Link href={`/products/${product.id}`}>
          <Image
            className="w-full h-48 object-cover mb-2"
            src={product.thumbnail}
            width={200}
            height={200}
            alt={`Bild ${product.title}`}
          />
        </Link>
      </div>
      <div className="items-center justify-between ">
        <h2 className="text-m font-semibold text-black-300">{product.title}</h2>
        <div className="flex items-center justify-between mt-6">
          <p className="text-m font-semibold text-red-500 uppercase">${product.price}</p>
          <span className="text-sm font-semibold text-green-600">{product.discountPercentage}%</span>
        </div>
        {/* Rating Stars */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
              fill={i < Math.round(product.rating) ? "currentColor" : "none"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({product.rating.toFixed(1)})</span>
        </div>

      </div>


      <div className="flex items-center justify-between mt-0  pt-1 w-full bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold py-1 px-4 rounded-lg  transition" >
        <button className="transition-transform transform hover:scale-110 active:scale-90 duration-200 ease-in-out cursor-pointer"
          onClick={() => decreaseQuantity(product.id)}>
          <Minus  strokeWidth={3} />
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
    </li>
  ); 

}