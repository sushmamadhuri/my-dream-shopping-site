"use client";

import Link from "next/link";
import Image from 'next/image';

import { FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Input } from "../ui/input";
import { Search, ShoppingBag, User, Heart, ShoppingCart } from "lucide-react";
import SearchResults from "./search-results";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";



export default function Header() {
    const router = useRouter(); // för att ändra url
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const { isAuthenticated, logout, userEmail } = useAuth();
    // funktion som trigas när användaren trycker på en tangent
    const handleSearch = () => {
        if (searchQuery.length <= 2) {
            alert("Sökningen måste vara längre än 2 karaktärer");
            return;
        }
        router.push(`/search?query=${searchQuery}`);
        setIsSearchOpen(false);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch(); // Call the same function on Enter key press
        }
    };

    return (
        <div>
            <header className="bg-white shadow-md px-4 py-1 bg-gradient-to-r from-green-600 to-teal-500 
            flex items-center fixed top-0 left-0 right-0 z-50  ">

                {/* Menu Icon */}

                {/* Top Bar */}
                <div className="flex items-center justify-between w-full ">


                    <div className="flex items-center ">
                        <Image src="/images/MD Logo1.jpg" alt="company logo" width={100}
                            height={50} />
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 ml-3 font-medium">
                        <ul className="flex space-x-6 text-white text-lg">
                            <li><Link href="/" className="hover:text-rose-700">Home</Link></li>
                            <li><Link href="/category/womens-dresses" className="hover:text-rose-700">Women</Link></li>
                            <li><Link href="/category/mens-shirts" className="hover:text-rose-700">Men</Link></li>
                            <li><Link href="/category/beauty" className="hover:text-rose-700">Beauty </Link></li>
                            <li><Link href="/category/fragrances" className="hover:text-rose-700">Fragrances</Link></li>
                            <li><Link href="/category/home-decoration" className="hover:text-rose-700">Home-decoration</Link></li>

                        </ul>

                    </div>
                    {/* Right Side Icons */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 ml-auto w-full
                     sm:w-auto gap-2 sm:gap-0">

                        <div className="relative w-full sm:w-10 md:w-80 lg:w-96 ">
                            {/* Search Icon */}
                            <Search className="absolute right-3 top-2.5 text-gray-500 cursor-pointer  "
                                onClick={handleSearch} size={18} />

                            {/* Input Field */}
                            <input
                                className="pl-3 pr-10 pr-4 py-2 border border-gray-300 w-3xs
                                 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300
                                 text-gray-900 border border-gray-300 rounded-lg
                                 bg-gray-50  "
                                type='search'
                                id="default-search"
                                placeholder='Search for products,brands and more'
                                value={searchQuery}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex space-x-3 ">
                            <div className="flex items-center space-x-4">
                                {isAuthenticated ? (
                                    <>

                                        <div className="relative group">
                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                                                {userEmail}
                                            </div>
                                        </div>
                                        <button
                                            onClick={logout}
                                            className="text-white text-lg font-semibold hover:underline"
                                        >
                                            Logout
                                        </button>


                                    </>
                                ) : (
                                    <Link href="/login" className="text-white hover:underline font-bold">

                                        <User className="w-6 h-6 cursor-pointer" />
                                    </Link>
                                )}
                            </div>
                            <Link href="/favorites">
                                <Heart className="w-6 h-6 cursor-pointer text-white font-bold" />
                            </Link>
                            <Link href="/cart" className="relative">
                                <ShoppingCart className="w-6 h-6 cursor-pointer text-white font-bold" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Hamburger Icon */}
                        <div onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer text-white">
                            <FaBars size={18} />
                        </div>


                    </div>
                </div>
                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Sliding Mobile Menu */}
                <div
                    className={`fixed top-0  left-0 h-full w-64 bg-gray-900 border-t-35 border-gray-900 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex items-center justify-between p-4 border-b border-gray-700 ">

                        <FaTimes
                            className="cursor-pointer"
                            size={24}
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <ul className="flex flex-col p-4 space-y-4">
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </div>

            </header>
        </div>
    );
}


