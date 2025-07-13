"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function SignUpPage() {
  return (
    <main className="signup-section flex flex-col justify-center gap-6 p-10">
      <section className="flex flex-col gap-5">
        <h2 className="text-4xl font-medium">Create an Account</h2>
        <button onClick={() => signIn()}>Sign up with Google</button>
      </section>
      <section className="flex flex-col gap-8">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="email" id="email" placeholder="Email" />
        <div className="flex flex-col gap-2">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
      </section>
      <section className="flex flex-col  gap-4 items-center">
        <p>
          I agree to the <Link href="/terms">Terms of Service </Link>
        </p>
        <button type="submit" className="w-full">
          Create Account
        </button>
        <div className="flex gap-1 p-2">
          <p>I already have an account yet. </p>
          <Link href="/login">Login</Link>
        </div>
      </section>
    </main>
  );
}
