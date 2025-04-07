import { Product } from "@/interfaces/product-interfaces";
import Link from "next/link";
import Image from "next/image";

export function Card({ product }: { product: Product }) {

  return (
    <li className="bg-white w-full max-w-xs mb-11 p-4 border rounded-md shadow-md">
      <div className="bg-gray-100 w-full max-w-xs p-4 mb-6 rounded-md shadow-md">
        <Link href={`/products/id/${product.id}`}>
          <Image
            className="w-full h-48 object-cover mb-2"
            src={product.thumbnail}
            width={200}
            height={200}
            alt={`Bild ${product.title}`}
          />
        </Link>
      </div>
      <div className="items-center justify-between mb-">
        <h2 className="text-xl font-bold text-black-300">{product.title}</h2>
        <div className="flex items-center justify-between mt-6">
          <p className="text-xl font-bold text-red-500 uppercase">${product.price}</p>
          <span className="text-sm font-semibold text-green-600">{product.discountPercentage}%</span>
        </div>
      </div>
    </li>
  );
}