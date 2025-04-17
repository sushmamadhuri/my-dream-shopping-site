"use client";

import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="flex flex-col items-center md:items-center lg:items-start">
      <h3 className="text-lg font-semibold mb-4 underline">LINKS</h3>

      {/* Navigation Links */}
      <ul className="flex flex-row md:flex-col lg:flex-row gap-4 text-center lg:text-left">
        <li className="hover:underline hover:text-yellow-400 transition-colors">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline hover:text-yellow-400 transition-colors">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:underline hover:text-yellow-400 transition-colors">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
