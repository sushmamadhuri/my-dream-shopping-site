"use client";

import { useState, useEffect } from "react";
import { Product } from "@/interfaces/product-interfaces";
import { CardList } from "@/components/product-cards/cards";
import Sorting from "@/components/sorting/page";

export function ClientProductSection({
    products,
    total,
}: {
    products: Product[];
    total: number;
}) {
    const [sortBy, setSortBy] = useState("name");
    const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

    useEffect(() => {
        const sorted = [...products];
        if (sortBy === "price") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortBy === "rating") {
            sorted.sort((a, b) => b.rating - a.rating);
        } else {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        }
        setSortedProducts(sorted);
    }, [sortBy, products]);

    return (
        <>


            <div className="w-full flex flex-col gap-4">
                {/* Flex wrapper for total + sorting */}
                <div className="w-full flex items-center justify-between px-2 sm:px-4">
                    <span className="text-gray-700 text-sm sm:text-base">
                        Total: {total} products
                    </span>
                    <Sorting sortBy={sortBy} setSortBy={setSortBy} />
                </div>

                <CardList products={sortedProducts} totalProducts={total} />
            </div>

        </>
    );
}
