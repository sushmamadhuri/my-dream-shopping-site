import { Product } from "@/interfaces/product-interfaces"
import { fetchProduct } from "@/data-access/fetch-product"
import Image from "next/image"
import type { Metadata } from 'next'
import AddToCart from "@/components/product-cards/AddToCart"

type Props = {
    params: Promise<{ id: number }>;
}

// Metadata (dynamisk - funkar bara i server komponenter)
export const generateMetadata = async ({ params }: Props
): Promise<Metadata> => {
    // await params to get id and fetch the product by id
    const { id } = await params;
    const product: Product = await fetchProduct(id);

    const {
        title,
        brand,
        price,
    } = product;

    return {
        title: `${title}`,
        description: `Buy ${title} from ${brand}. Price: $${price}`,
    }
}

// More info about metadata: 
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export default async function ProductPage({ params }: Props) {
    // await params to get id
    const { id } = await params;
    // fetch product by id
    const product: Product = await fetchProduct(id);
    // Definition of done: image, name, description and price
    const {
        title,
        description,
        price,
        images: [image],
        // category,
        // warrantyInformation,
        // shippingInformation,
        // returnPolicy
    } = product;

    return (
        <main className="grid items-center justify-items-center width-full lg:w-3/5 px-[5vw] lg:px-[10vw] lg:m-32  mt-16  grid-cols-[1fr_1fr]">
            <div className="">
                <Image
                    className=""
                    src={image}
                    alt=""
                    width={400}
                    height={400}
                    priority
                />
            </div>
            <section className="border-b pb-4 border-gray-400">
                <h2 className="lg:text-2xl font-semibold">{title}</h2>
                <dl className="lg:text-2xl  pb-4">
                    <dt className="sr-only">Price:</dt>
                    <dd>${price}</dd>
                </dl>
                <p className="lg:text-l text-s pb-4">{description}</p>
                <div className="lg:m-10 ">
                    <AddToCart product={product} />
                </div>
            </section>
        </main>
    )
}