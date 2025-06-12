import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <main className="login-section flex flex-col justify-center gap-10 p-10">
      <h2 className="text-4xl font-medium">Login</h2>
      <section className="flex flex-col gap-5">
        <input type="text" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </section>
      <section className="flex flex-col items-center gap-2">
        <button type="submit" className="w-full">
          Submit
        </button>
        <div className="flex gap-1">
          <p>I don't have an account yet. </p>
          <Link href="/signup">Sign Up</Link>
        </div>
      </section>
    </main>
  );
}
