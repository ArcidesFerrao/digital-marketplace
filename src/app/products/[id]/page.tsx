import { createTransaction } from "@/app/actions/createTransaction";
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
    include: {
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
          src={product.imageUrl}
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
          <form action={createTransaction} className="flex flex-col">
            <input
              type="hidden"
              name="sellerId"
              id="sellerId"
              value={product.seller.id}
            />

            <input
              type="hidden"
              name="amount"
              id="amount"
              value={product.price}
            />
            <input type="hidden" name="productId" id="productId" value={id} />
            <input type="submit" value="Buy" />
          </form>
        </section>
      </section>
    </main>
  );
}
