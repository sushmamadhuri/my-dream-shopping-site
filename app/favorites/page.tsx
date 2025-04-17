"use client";

import { useFavorite } from "@/components/context/FavoriteContext";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useAuth } from "@/components/context/AuthContext";

export default function FavoritesPage() {
    const { toggleFavorite, isFavorite, favorites } = useFavorite();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg font-semibold text-gray-600">
                    Please login to view your Favorites ❤️
                </p>
            </div>
        );
    }

    return (
        <div className="lg:p-25 p-5 mt-10">
            <h1 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-500
            inline-block text-transparent bg-clip-text ">Your Favorites </h1>❤️

            {favorites.length === 0 ? (
                <p>No favorites yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favorites.map((product) => (
                        <div key={product.id} className="bg-gray-100 w-full max-w-xs p-4 mb-6 rounded-md shadow-md">
                            {/* Heart icon */}
                            <button
                                onClick={() => toggleFavorite(product)}
                                className="absolute text-red-500 hover:scale-110 transition-transform"
                            >
                                <Heart fill={isFavorite(product.id) ? "red" : "none"} />
                            </button>
                            <Link href={`/products/${product.id}`}>
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    width={200}
                                    height={200}
                                    className="object-cover w-34 lg:w-48 h-auto rounded"
                                />
                            </Link>
                            <h2 className="mt-2 font-semibold text-l">{product.title}</h2>
                            <p className="text-red-500 font-semibold">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
