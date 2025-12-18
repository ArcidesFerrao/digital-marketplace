"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="navigator w-full flex space-x-6 justify-between items-center p-4 ">
      <Link href="/#hero">
        <Image
          src="/assets/evolure-box-w.png"
          width={40}
          height={38}
          alt="Home"
        />
      </Link>
      {status === "loading" ? (
        <Image
          src="/assets/infinity.svg"
          alt="Loading..."
          width={32}
          height={32}
        />
      ) : (
        <div>
          {session?.user ? (
            <div className="flex gap-6 items-center">
              <Link href="/products/new">Sell</Link>
              <span>
                Welcome back,{" "}
                <Link href={`/dashboard/`}>
                  {" "}
                  {session.user.name?.split(" ")[0]}
                </Link>
                !
              </span>
            </div>
          ) : (
            <div className="flex gap-6 items-center">
              <button className="login-button" onClick={() => signIn()}>
                Login
              </button>
              <button className="login-button" onClick={() => signIn()}>
                Join Free
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
