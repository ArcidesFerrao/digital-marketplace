"use client";

import { ProductForm } from "@/components/ProductForm";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function NewProductPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex justify-center items-center p-10">
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-10">
      {session?.user ? (
        <ProductForm />
      ) : (
        <div className="flex flex-col gap-10">
          <h4>You must be signed in to add a product.</h4>
          <button onClick={() => signIn()}>Sign In with Google</button>
        </div>
      )}
    </main>
  );
}
