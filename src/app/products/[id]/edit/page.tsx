import React from "react";
import EditProductPage from "./EditProduct";
import db from "@/db/db";

type Params = Promise<{ id: string }>;

export default async function EditPage(props: { params: Params }) {
  const { id } = await props.params;
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return <div>Product not found!</div>;
  }

  return <EditProductPage product={product} />;
}

// export const dynamic = "force-dynamic";
