import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <main className="login-section flex flex-col justify-center gap-6 p-10 ">
      <section className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium">Login</h2>
        <div className="flex gap-1">
          <p>I don&apos;t have an account yet. </p>
          <Link href="/signup">Sign Up</Link>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <input type="text" name="email" id="email" placeholder="Email" />
        <div className="flex flex-col gap-2">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Link href="/">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </section>
      <section className="flex flex-col  gap-2">
        <button type="submit" className="w-full">
          Submit
        </button>
      </section>
    </main>
  );
}
