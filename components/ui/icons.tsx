import { Phone, Mail } from 'lucide-react';

type CircleIconTypes = "phone" | "mail";

export const CircleIcon = ({ type }: { type: CircleIconTypes }) => {

    return (
        <div
            className="
                size-10 grid place-items-center
                bg-red-600 rounded-full
                "
            aria-hidden="true"
        >
            {type === "phone" && (
                <Phone color="white" size={20} />
            )}
            {type === "mail" && (
                <Mail color="white" size={20} />
            )}
        </div>
    )
}