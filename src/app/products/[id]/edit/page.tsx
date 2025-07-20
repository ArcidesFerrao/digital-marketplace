import React from "react";
import EditProductPage from "./EditProduct";
import db from "@/db/db";

export default async function EditPage({ params }: { params: { id: string } }) {
  const paramsId = await params;
  const product = await db.product.findUnique({
    where: {
      id: paramsId.id,
    },
  });

  if (!product) {
    return <div>Product not found!</div>;
  }

  return <EditProductPage product={product} />;
}
