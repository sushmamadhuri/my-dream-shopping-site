import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header-page";
import { CartProvider } from "@/components/context/CartContext";
import { FavoriteProvider } from "@/components/context/FavoriteContext";
import { AuthProvider } from "@/components/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <FavoriteProvider>
        <CartProvider>
        <Header />
        {children}
        </CartProvider>
        </FavoriteProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
