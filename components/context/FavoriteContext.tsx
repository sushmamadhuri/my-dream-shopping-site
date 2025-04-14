"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "@/interfaces/product-interfaces";
import { useAuth } from "./AuthContext";

type FavoriteContextType = {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
};

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

    const { isAuthenticated } = useAuth(); // 👈 use the context here

useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [isAuthenticated]);
  
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isAuthenticated]);
  

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};
