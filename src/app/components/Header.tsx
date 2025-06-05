import Link from "next/link";

export const Header = () => (
  <nav className="w-full flex space-x-6 justify-between p-4 ">
    <Link href="/#hero">Home</Link>
    <div className="flex gap-6">
      <Link href="/#services">Sell</Link>
      <Link href="/#projects">Login</Link>
      <Link href="/#contact">Join Free</Link>
    </div>
  </nav>
);
