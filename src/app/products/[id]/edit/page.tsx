import React from "react";
import EditProductPage from "./EditProduct";
import db from "@/db/db";

export default async function EditPage({ params }: { params: { id: string } }) {
  const product = await db.product.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!product) {
    return <div>Product not found!</div>;
  }

  return <EditProductPage product={product} />;
}
