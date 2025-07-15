import { createTransaction } from "@/app/actions/createTransaction";
import db from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    return (
      <main className="flex items-center justify-center">
        <p>Produto nao encontrado</p>
      </main>
    );
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
    <main className="flex flex-col gap-10 p-5">
      <section className="flex h-fit gap-10">
        <Image
          className="rounded-lg h-fit"
          src={product.imageUrl}
          alt="product-image"
          width={300}
          height={300}
        />
        <section className="flex flex-col justify-between">
          <div className="header-product flex flex-col  gap-4">
            <h2 className="text-2xl font-medium">{product.title}</h2>
            <h2 className="text-4xl font-bold">MZN {product.price}.00</h2>
          </div>
          <div className="footer-product flex flex-col  gap-2">
            <p>Category: {product.category}</p>
            <p>Added at: {product.createdAt.toLocaleDateString()}</p>
            <p>
              By:{" "}
              <Link href={`/seller/${product.sellerId}`}>
                {product.seller.name}
              </Link>
            </p>
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
          </div>
        </section>
      </section>
      <section className="max-w-xl">
        <h2 className="text-2xl font-medium">Product Description</h2>
        <p>{product.description}</p>
      </section>
    </main>
  );
}
