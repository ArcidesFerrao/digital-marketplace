import { ListCard } from "@/components/List";
import db from "@/db/db";
import React from "react";

export default async function SellerPage({
  params,
}: {
  params: { sellerId: string };
}) {
  const products = await db.product.findMany({
    where: {
      sellerId: params.sellerId,
    },
  });
  const sellerData = await db.user.findUnique({
    where: {
      id: params.sellerId,
    },
  });
  if (products.length === 0) {
    return (
      <main>
        <h2>This seller has no products yet...</h2>
      </main>
    );
  }
  return (
    <main className="flex flex-col gap-10 p-5">
      <h2 className="text-4xl font-medium">
        Products by {sellerData?.name.split(" ")[0]}
      </h2>
      <section className="flex flex-col gap-y-5">
        <div className="list-items grid grid-cols-3 gap-y-5 w-full">
          {products.map((item) => (
            <ListCard
              key={item.id}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
              price={item.price}
              id={item.id}
              createdAt={item.createdAt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
