import Image from "next/image";
import { fetchProducts } from "@/data-access/fetch-products"
import { CardList } from "@/components/product-cards/cards";
import { ClientProductSection } from "@/components/sorting/client-product-section";

export default async function Home({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = (await searchParams).page;
  const currentPage = Number(page) || 1;
  const { products, total } = await fetchProducts(currentPage, 24);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center
     min-h-screen  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center">
        <h1 className="text-center text-xl font-bold bg-gradient-to-r from-green-600 to-teal-500 inline-block text-transparent bg-clip-text ">Our products</h1>
        <ClientProductSection products={products} total={total} />
      </main>
    </div>
  );
}