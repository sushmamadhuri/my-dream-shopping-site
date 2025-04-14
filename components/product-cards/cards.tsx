"use client";
import { Product } from "@/interfaces/product-interfaces";
import { Card } from "./card";
import Pagination from "./pagination";


export function CardList({ products, totalProducts }: { products: Product[]; totalProducts: number }) {

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
      <Pagination totalProducts={totalProducts} />
    </div>
  );
}

