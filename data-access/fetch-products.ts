"use server";
import { API_ENDPOINT } from "./md-endpoints";

export async function fetchProducts(page = 1, limit = 24) {
  const skip = (page - 1) * limit; // Beräkna hur många produkter att hoppa över

  const res = await fetch(`${API_ENDPOINT}?limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();

  return {
    products: data.products, // Lista över produkter
    total: data.total,       // Totalt antal produkter (för paginering)
  };
}