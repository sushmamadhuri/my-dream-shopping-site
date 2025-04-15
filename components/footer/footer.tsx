"use client";

import Image from "next/image";
import FooterNav from "./footer-nav/footer-nav";
import FooterSocialLinks from "./footer-social-links/footer-social-links";

export default function Footer() {
    return (
        <footer className=" bg-gradient-to-r from-emerald-500 to-emerald-800 text-white py-8 border-t-2">
            <div className="container mx-auto px-4">
                {/* Logotyp + Företagsnamn */}

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center md:text-left">
                    {/* Navigationslänkar */}
                    <header >
                        <Image
                            src="/images/MD Logo1.jpg"
                            alt="MyDream E-commerce logo"
                            width={100}
                            height={100}
                            className="mb-2"
                        />
                    </header>
                    <FooterNav />

                    {/* Sociala medier */}
                    <FooterSocialLinks />

                    {/* Kontaktinformation */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
                        <ul className="space-y-2">
                            <li className="hover:underline hover:text-yellow-400">📞 +46 721 234 76</li>
                            <li className="hover:underline hover:text-yellow-400">✉️ mydream@info.se</li>
                        </ul>
                    </div>
                    {/* Adressinformation */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
                        <ul className="space-y-2">
                            <li>📍 Projektgatan 22,<br></br>   123 45 Narnia</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright-text */}
                <p className="text-center mt-6 text-sm opacity-80">
                    © 2025 MyDream AB. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

