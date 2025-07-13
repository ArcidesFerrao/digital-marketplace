"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function NotSigned() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center">
      <h2>User not authenticated</h2>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h4>Sign In to access the seller dashboard</h4>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    </main>
  );
}
