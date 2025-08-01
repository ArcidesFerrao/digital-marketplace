import { AdminHeader } from "@/components/AdminHeader";
import { ApproveForm, DeleteForm } from "@/components/ApproveForm";
import { getProducts } from "@/lib/getProducts";
import Link from "next/link";
import React from "react";

export default async function RequestsPage() {
  const products = await getProducts();

  return (
    <main className="admin-section p-10 flex flex-col gap-10">
      <AdminHeader />

      <section className="flex flex-col gap-5">
        <div>
          <h2 className="text-2xl">Requests ({products.length})</h2>
        </div>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/transactions/${item.id}`}>
                      {item.title.length > 20
                        ? item.title.slice(0, 20) + "..."
                        : item.title}
                    </Link>
                  </td>
                  <td>{item.category}</td>
                  <td>MZN {item.price}.00</td>
                  <td>
                    {item.seller.name.length > 15
                      ? item.seller.name.slice(0, 15) + "..."
                      : item.seller.name}
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <ApproveForm productId={item.id} />
                      <DeleteForm productId={item.id} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan={5}>nenhum produto encontrado!</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
