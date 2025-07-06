import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  const session = await auth();

  return (
    <nav className="navigator w-full flex space-x-6 justify-between p-4 ">
      <Link href="/#hero">
        <Image src="/assets/logo.png" width={40} height={38} alt="Home" />
      </Link>
      {session.user ? (
        <div>
          <Link href={`/dashboard/`}> Ola! {session.user.email}</Link>
        </div>
      ) : (
        <div className="flex gap-6 items-center">
          <Link href="/products/new">Sell</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Join Free</Link>
        </div>
      )}
    </nav>
  );
};
