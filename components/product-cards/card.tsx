import { Product } from "@/interfaces/product-interfaces";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from 'lucide-react';
import { useFavorite } from "../context/FavoriteContext";
import { Heart, Star } from "lucide-react";

export function Card({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite } = useFavorite();

  const { cartItems, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, getQuantity } = useCart();
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
            <button className="text-white-950  cursor-pointer"
              onClick={() => decreaseQuantity(product.id)}>
              <Minus size={18} />
            </button>

            <button className="cursor-pointer "
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button> <button className="text-white-950 cursor-pointer"
              onClick={() => increaseQuantity(product.id)}>
              <Plus size={18} />
            </button>
          </div>
       


      
    </li>
  );
}