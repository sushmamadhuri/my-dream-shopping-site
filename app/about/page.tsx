import type { Metadata } from "next";
import Image from "next/image";
import freestocks_3Q3tsJ01nc_unsplash from "@/public/images/freestocks_3Q3tsJ01nc_unsplash.jpg"

export const metadata: Metadata = {
    title: "About SMSS",
};

export default function AboutPage() {

    return (
        <main
            className="
            w-[100vw] py-[4.2rem]
            max-w-[34.56rem] md:max-w-[1700px] mx-auto
            grid gap-y-10 justify-items-center
            md:grid-cols-[min(5vw,30px)_1fr_1fr_min(5vw,30px)]  
        ">
            <section
                className="
                w-full px-8
                md:col-[2/3] md:row-span-full
                grid gap-8 max-w-[55ch] content-center
                ">
                <h2 className="text-[3.375rem] font-semibold leading-[1.2]">Our Story</h2>
                <p>Recusandae, non error sapiente quasi voluptate. Quae porro sapiente fuga. Voluptatem aliquid dolor nulla quasi. Deserunt ducimus modi asperiores omnis culpa neque vitae. Assumenda, eaque. Ea cum sed optio tenetur neque. Laboriosam.</p>
                <p>Praesentium illum commodi debitis iusto ad repudiandae est, ex sint laboriosam veniam ea, ratione vero inventore at itaque autem tempora impedit soluta!</p>
            </section>

            <div
                className="
                w-full max-w-[31rem] mx-auto
                h-[368px] md:h-[609px]
                md:col-[3/-1] md:row-span-full md:max-w-full
                ">
                <Image
                    className="
                        object-cover object-center w-auto h-full"
                    src={freestocks_3Q3tsJ01nc_unsplash}
                    alt="Woman holding shopping bags"
                    placeholder="blur"
                    priority
                />
            </div>
        </main>
    )
}