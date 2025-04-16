"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CardList } from "@/components/product-cards/cards";
import { Product } from "@/interfaces/product-interfaces";
import { ClientProductSection } from "@/components/sorting/client-product-section";

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as string;
  
  const [product, setProduct] = useState<Product[]>([]);
  const total = 24; //just for test purpose, properply execute and change in the future
  
  useEffect(() => {
    if (category) {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => setProduct(data.products));
    }
  }, [category]);
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center
     min-h-screen  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center">
        <h1 className="text-center text-xl font-bold bg-gradient-to-r from-green-600 to-teal-500 
        inline-block text-transparent bg-clip-text capitalize ">{category}</h1>
        <ClientProductSection products={product} total={total} />
      </main>
    </div>
  );
}


            
