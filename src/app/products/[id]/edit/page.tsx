"use client";

import { ProductForm } from "@/components/ProductForm";
import db from "@/db/db";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: session, status } = useSession();
  const product = await db.product.findUnique({
    where: { id },
  });

  if (status === "loading") {
    return (
      <main className="flex justify-center items-center p-10">
        <Image
          src="/assets/infinity.svg"
          alt="Loading..."
          width={50}
          height={50}
        />
      </main>
    );
  }
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-10">
      {session?.user ? (
        <ProductForm product={product} />
      ) : (
        <div className="flex flex-col gap-10">
          <h4>You must be signed in to add a product.</h4>
          <button onClick={() => signIn()}>Sign In with Google</button>
        </div>
      )}
    </main>
  );
}
