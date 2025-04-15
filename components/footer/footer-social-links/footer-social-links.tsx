"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSocialLinks() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
      <ul className="flex flex-col md:flex-col lg:flex-row gap-4 md:gap-6">
        <li>
          <Link href="https://www.facebook.com/?locale=sv_SE">
            <Image
              src="/icons/logo-facebook.svg"
              alt="Facebook logo"
              width={24}
              height={24}
              className="hover:opacity-70 transition-opacity"
            />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/">
            <Image
              src="/icons/logo-twitter.svg"
              alt="Twitter logo"
              width={24}
              height={24}
              className="hover:opacity-70 transition-opacity"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/">
            <Image
              src="/icons/logo-instagram.svg"
              alt="Instagram logo"
              width={24}
              height={24}
              className="hover:opacity-70 transition-opacity"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/">
            <Image
              src="/icons/logo-linkedin.svg"
              alt="LinkedIn logo"
              width={24}
              height={24}
              className="hover:opacity-70 transition-opacity"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
