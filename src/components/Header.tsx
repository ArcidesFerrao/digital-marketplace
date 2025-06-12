import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <nav className="navigator w-full flex space-x-6 justify-between p-4 ">
    <Link href="/#hero">
      <Image src="/assets/logo.png" width={40} height={38} alt="Home" />
    </Link>
    <div className="flex gap-6 items-center">
      <Link href="/product/new">Sell</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Join Free</Link>
    </div>
  </nav>
);
