'use server';

import { Product } from "@/interfaces/product-interfaces";
import { API_ENDPOINT } from "@/data-access/md-endpoints";


// Fetch a single product by its id
export const fetchProduct = async (id: number): Promise<Product> => {
    const res = await fetch(`${API_ENDPOINT}/${id}`);
console.log("id",id);
    if (!res.ok) {
        // throw new Error("Failed to fetch products");
        throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
    }
    const product: Product = await res.json();
    return product; 
};