import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">My Dream</h1>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
