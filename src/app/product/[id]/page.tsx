import db from "@/db/db";
import Image from "next/image";
import React from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    return <main></main>;
  }

  const product = await db.product.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      createdAt: true,
      seller: true,
    },
  });

  if (!product)
    return (
      <main className="flex items-center justify-center">
        <p>Produto nao encontrado</p>
      </main>
    );
  return (
    <main className="flex gap-10 p-5">
      <section className="flex h-fit gap-10">
        <Image
          className="rounded-lg h-fit"
          src="/assets/Beginner-Freelancer-2.png"
          alt="product-image"
          width={300}
          height={300}
        />
        <section className="flex flex-col justify-between">
          <h2 className="text-2xl font-medium">{product.title}</h2>
          <h2 className="text-4xl font-bold">MZN {product.price}.00</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>By: {product.seller.name}</p>
          <button>Buy</button>
        </section>
      </section>
    </main>
  );
}
