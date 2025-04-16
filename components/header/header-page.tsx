"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { cartItems } = useCart();
    const { isAuthenticated, logout, userEmail } = useAuth();

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleSearch = () => {
        if (searchQuery.length <= 2) {
            alert("Sökningen måste vara längre än 2 karaktärer");
            return;
        }
        router.push(`/search?query=${searchQuery}`);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className="bg-gradient-to-r from-green-600 to-teal-500 shadow-md fixed top-0 left-0 right-0 z-50 px-4 py-2">
            {/* Top Bar Container */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                {/* Logo + Search + Icons (All in one line for mobile) */}
                <div className="flex items-center justify-between w-full gap-2">
                        {/* Mobile Menu Icon */}
                        <div className="md:hidden cursor-pointer text-white" onClick={() => setIsOpen(true)}>
                            <FaBars size={18} />
                        </div>
                    {/* Logo */}
                    <div className="flex-shrink-0  hidden md:block">
                        <Image src="/images/MD Logo1.jpg" alt="Logo" width={80} height={40} />
                    </div>

                    {/* Search Input */}
                    <div className="relative flex-grow mx-2">
                        <Search
                            className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                            onClick={handleSearch}
                            size={18}
                        />
                        <input
                            type="search"
                            placeholder="Search for products, brands and more"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                        />
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-3 text-white  ">
                        {isAuthenticated ? (
                            <>
                                <div className="relative group">
                                    
                                    <button
                                        onClick={logout}
                                        className="text-white text-lg font-medium hover:underline"
                                    >
                                        Logout
                                    </button>
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                                     hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                                        {userEmail}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Link href="/login">
                                <User className="w-5 h-5 cursor-pointer text-lg font-medium" strokeWidth={3} />
                            </Link>
                        )}
                        <Link href="/favorites">
                            <Heart className="w-5 h-5 cursor-pointer" strokeWidth={3} />
                        </Link>
                        <Link href="/cart" className="relative">
                            <ShoppingCart className="w-5 h-5 cursor-pointer"strokeWidth={3} />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                    
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex justify-center w-full mt-2 md:mt-0">
                    <ul className="flex space-x-6 text-white text-lg font-medium">
                        <li><Link href="/" className="hover:text-rose-700">Home</Link></li>
                        <li><Link href="/category/womens-dresses" className="hover:text-rose-700">Women</Link></li>
                        <li><Link href="/category/mens-shirts" className="hover:text-rose-700">Men</Link></li>
                        <li><Link href="/category/beauty" className="hover:text-rose-700">Beauty</Link></li>
                        <li><Link href="/category/fragrances" className="hover:text-rose-700">Fragrances</Link></li>
                        <li><Link href="/category/home-decoration" className="hover:text-rose-700">Home-decoration</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Slide Menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-white bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
                    <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-green-600 to-teal-500 
                    text-white z-50 transform transition-transform duration-800 ease-in-out">
                        <div className="flex items-center justify-between p-4 border-b border-gray-700">
                            <FaTimes className="cursor-pointer" size={24} onClick={() => setIsOpen(false)} />
                        </div>
                        <ul className="flex flex-col p-4 space-y-4 text-lg text-white">
                            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><Link href="/category/womens-dresses" onClick={() => setIsOpen(false)}>Women</Link></li>
                            <li><Link href="/category/mens-shirts" onClick={() => setIsOpen(false)}>Men</Link></li>
                            <li><Link href="/category/beauty" onClick={() => setIsOpen(false)}>Beauty</Link></li>
                            <li><Link href="/category/fragrances" onClick={() => setIsOpen(false)}>Fragrances</Link></li>
                            <li><Link href="/category/home-decoration" onClick={() => setIsOpen(false)}>Home Decoration</Link></li>
                        </ul>
                    </div>
                </>
            )}
        </header>
    );
}
