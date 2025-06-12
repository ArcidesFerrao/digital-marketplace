import { ProductForm } from "@/components/ProductForm";
import React from "react";

export default function NewProductPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-10">
      <ProductForm />
    </main>
  );
}
