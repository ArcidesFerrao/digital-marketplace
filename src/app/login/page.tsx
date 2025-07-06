"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main className="login-section flex flex-col justify-center gap-6 p-10 ">
      <form onSubmit={handleSubmit}>
        <section className="flex flex-col gap-2">
          <h2 className="text-4xl font-medium">Login</h2>
          <div className="flex gap-1">
            <p>I don&apos;t have an account yet. </p>
            <Link href="/signup">Sign Up</Link>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="/">
              <p>Forgot Password?</p>
            </Link>
          </div>
        </section>
        <section className="flex flex-col  gap-2">
          <button type="submit" className="w-full">
            Login
          </button>
        </section>
      </form>
    </main>
  );
}
