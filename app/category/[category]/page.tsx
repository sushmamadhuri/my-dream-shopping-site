"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CardList } from "@/components/product-cards/cards";
import { Product } from "@/interfaces/product-interfaces";

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
    <div className="p-10">
      <h1 className="text-2xl font-semibold capitalize mb-4 m-20">{category}</h1>
          <CardList products={product} totalProducts={total} />
         
      
    </div>
  );
}
