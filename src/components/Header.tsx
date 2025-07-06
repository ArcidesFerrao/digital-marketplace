"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="navigator w-full flex space-x-6 justify-between p-4 ">
      <Link href="/#hero">
        <Image src="/assets/logo.png" width={40} height={38} alt="Home" />
      </Link>
      {session?.user ? (
        <div>
          <Link href={`/dashboard/`}> Welcome! {session.user.email}</Link>
        </div>
      ) : (
        <div className="flex gap-6 items-center">
          <Link href="/products/new">Sell</Link>
          <button onClick={() => signIn()}>Login</button>
          {/* <Link href="/api/auth/signin">Login</Link> */}
          <Link href="/signup">Join Free</Link>
        </div>
      )}
    </nav>
  );
};
