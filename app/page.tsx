import Image from "next/image";
import { fetchProducts } from "@/data-access/fetch-products"
import { CardList } from "@/components/product-cards/cards";
import { ClientProductSection } from "@/components/sorting/client-product-section";

export default async function Home({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = (await searchParams).page;
  const currentPage = Number(page) || 1;
  const { products, total } = await fetchProducts(currentPage, 24);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center">
        <h1 className="text-center text-black-300 ">Our products</h1>
        <span >Totalt: {total} products</span>
        <ClientProductSection products={products} total={total} />
      </main>
    </div>
  );
}