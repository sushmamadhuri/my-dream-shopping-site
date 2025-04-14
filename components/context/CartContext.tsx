"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import type { Products } from "@/interfaces/product-interfaces";
import type { Product } from "@/interfaces/product-interfaces";
import { useAuth } from "@/components/context/AuthContext";


type CartItem = Product & { quantity: number };

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemCount: () => number;
  isInCart: (id: number) => boolean;
  getQuantity: (id: number) => number;
}


const CartContext = createContext<CartContextType | null>(null);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    const { isAuthenticated } = useAuth(); // 👈 use the context here

  // 👇 Load cart from localStorage when user logs in
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [isAuthenticated]); // <- only run on login

  // 👇 Save to localStorage on every cart update
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isAuthenticated]);


  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getItemCount = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const isInCart = (id: number) => !!cartItems.find((item) => item.id === id);
  const getQuantity = (id: number) => cartItems.find((item) => item.id === id)?.quantity || 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getItemCount,
        isInCart,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
