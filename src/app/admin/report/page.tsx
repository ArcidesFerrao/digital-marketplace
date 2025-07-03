import { AdminHeader } from "@/components/AdminHeader";
import getTransactions from "@/lib/getTransactions";
import React from "react";

export default async function ReportPage() {
  const data = await getTransactions();

  if (!data) return <main>Transactions not found</main>;

  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />

      <section className="flex flex-col gap-5">
        <h2 className="text-2xl">Transactions</h2>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Seller</th>
              <th>Amount</th>
              <th>Buyer</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.product.title}</td>
                  <td>{item.seller.name}</td>
                  <td>MZN {item.amount}.00</td>
                  <td>{item.buyer.name}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td>nenhuma transacao encontrada!</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
