import { HTMLAttributes } from "react";

export const SpeechBubble = ({
    children,
    ...rest
}: {
    children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
    
    const baseClass = `bg-gray-800 text-white w-[100%] z-10 text-sm font-medium transition-opacity duration-300 rounded-lg shadow-xs py-1 px-2`;
    const baseArrowClass = "before:absolute before:border-10 before:border-transparent";
    const positionTop = "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6";
    const positionTopArrow = "before:left-1/2 before:-translate-x-1/2 before:top-full before:border-t-gray-800";
  
    return (
        <div
            className={`${baseClass} ${positionTop} ${baseArrowClass} ${positionTopArrow}`}
            {...rest}
        >
            {children}
        </div> 
    )    
}