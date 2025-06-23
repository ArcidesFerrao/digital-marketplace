import { AdminHeader } from "@/components/AdminHeader";
import { ApproveForm } from "@/components/ApproveForm";
import { getProducts } from "@/lib/getProducts";
import React from "react";

export default async function RequestsPage() {
  const products = await getProducts();

  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />

      <section>
        <div>
          <h2>Requests</h2>
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
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.seller.name}</td>
                  <td>
                    <ApproveForm productId={item.id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>nenhum produto encontrado!</tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
