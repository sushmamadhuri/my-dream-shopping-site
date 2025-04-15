import Image from "next/image";
import map from "@/public/images/map.jpeg";
import { SpeechBubble } from '@/components/ui/popups';

export const Map = () => {
    return (
        <figure
            className="
                aspect-square shadow-md 
                grid grid-rows-[58.9%_1fr]
            ">
            <Image
                className="
                row-span-full col-span-full
                object-cover aspect-square w-full h-auto"
                src={map}
                alt=""
                placeholder="blur"
                priority
            />
            <div className="
                row-end-2 col-span-full
                justify-self-center self-end
                h-[28%]
                grid justify-center
                relative w-[50%]
            ">
                <SpeechBubble>
                    <address className="flex flex-wrap justify-center not-italic">
                        <span className="whitespace-nowrap">Projektgatan 22,</span>
                        <span className="whitespace-nowrap">123 45 Narnia</span>
                    </address>
                </SpeechBubble>
                <svg
                    className="fill-red-600 h-full aspect-square"
                    viewBox="0 0 297.00 297.00"
                    stroke="#d10000"
                    strokeWidth="0.00297">
                    <path d="M148.5,0C87.431,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.975,183.645 c1.938,1.705,4.357,2.559,6.778,2.559s4.841-0.853,6.778-2.559c4.244-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.569,0,148.5,0z M213.16,104.51l-24.9,24.333l5.88,34.36c0.658,3.849-0.926,7.737-4.086,10.031 c-1.786,1.295-3.898,1.953-6.023,1.953c-1.636,0-3.277-0.391-4.78-1.183l-30.75-16.208l-30.75,16.208 c-3.455,1.822-7.643,1.521-10.804-0.77c-3.16-2.294-4.744-6.183-4.086-10.031l5.88-34.36l-24.9-24.333 c-2.789-2.726-3.792-6.799-2.584-10.508c1.207-3.709,4.414-6.412,8.273-6.975l34.386-5.009L139.3,50.767 c1.726-3.506,5.293-5.726,9.2-5.726s7.475,2.22,9.2,5.726l15.385,31.252l34.386,5.009c3.859,0.563,7.066,3.266,8.273,6.975 C216.951,97.711,215.949,101.784,213.16,104.51z"></path>
                </svg>
            </div>
            <figcaption className="sr-only">A map showing our location in Narnia, Chicago</figcaption>
        </figure>
    )
}