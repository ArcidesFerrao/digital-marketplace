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
    },
  });

  if (!product)
    return (
      <main className="flex items-center justify-center">
        <p>Produto nao encontrado</p>
      </main>
    );
  return (
    <main>
      <section>
        <h2>{product.title}</h2>
      </section>
      <section>
        <Image src="/" alt="product-image" width={500} height={500} />
        <div>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
        </div>
      </section>
    </main>
  );
}
