import type { Metadata } from "next";
import { CircleIcon } from '@/components/ui/icons';
import { Map } from "@/components/ui/map";

export const metadata: Metadata = {
    title: "Contact - MyDream Customer Support",
    description: "Get in touch with our customer support team for fast and friendly assistance. We're here to help with orders, returns, and any questions you may have. Contact us today!",
};

export default function ContactPage() { 

    return (
        <main
            className="
            w-[90vw] max-w-sm md:max-w-5xl mx-auto py-[8.2rem] 
            grid gap-10 
            md:grid-cols-12 md:grid-rows-[auto_1fr]
            ">
            
            <section
                className="
                max-w-[37ch]
                md:col-[1/6] flex flex-wrap gap-4 pb-10
                border-solid border-b-2 border-gray-500
                ">
                <header className="flex items-center gap-x-[1rem]">
                    <CircleIcon type="phone" />
                    <h2 className="text-xl">Call To Us</h2>
                </header>
                <p>We’re here to help and will do our best to resolve your issue as quickly as possible.</p>
                <address className="not-italic">
                    <dl className="flex gap-x-[0.3rem]">
                        <dt>Phone:</dt>
                        <dd><a href="tel:+8801611112222">+8801611112222</a></dd>
                    </dl>
                </address>
            </section>

            <section
                className="
                max-w-[37ch]
                md:col-[1/6] flex flex-wrap gap-4 content-start
                ">
                <header className="flex items-center gap-x-[1rem]">
                    <CircleIcon type="mail" />
                    <h2 className="text-xl">Write To Us</h2>
                </header>
                <p>If you’re experiencing any difficulties or have questions about our products, please don’t hesitate to reach out. We will respond within 12 hours.</p>
                <address>
                    <dl>
                        <dt className="not-italic">For questions about your order:</dt>
                        <dd>
                            <a href="mailto:orders@mydreamfakeshopmail.com
	                            ?subject=Issue with My Order - [Order Number]
                                &body=Hello,%0D%0A%0D%0AI am experiencing an issue with my order.%0D%0A%0D%0AOrder Number: [Your Order Number]%0D%0A%0D%0AMy Name: [Your Name]%0D%0A%0D%0AIssue Description: [Briefly describe the problem]">
                                orders@mydreamfakeshopmail.com
                            </a>
                        </dd>
                        <dt className="not-italic pt-4">For other questions and general support:</dt>
                        <dd>
                            <a href="mailto:support@mydreamfakeshopmail.com
	                            ?subject=Question About [Your Topic]
                                &body=Hi,%0D%0A%0D%0AI have a question regarding [briefly describe your issue].%0D%0A%0D%0AMy Name: [Your Name]">
                                support@mydreamfakeshopmail.com
                            </a>
                        </dd>
                    </dl>
                </address>
            </section>

            <section
                className="
                w-full h-full md:max-w-lg md:justify-self-end
                md:col-[6/-1] md:row-span-full 
                "
            >
                <Map />
            </section>
        </main>
    );
}