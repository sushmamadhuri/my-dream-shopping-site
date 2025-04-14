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
        <div className="p-30">
            <h1 className="text-2xl font-bold mb-6">Your Favorites ❤️</h1>

            {favorites.length === 0 ? (
                <p>No favorites yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favorites.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-md p-4">
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
                                    className="object-cover w-full h-48 rounded"
                                />
                            </Link>
                            <h2 className="mt-2 font-bold text-lg">{product.title}</h2>
                            <p className="text-red-500 font-semibold">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
