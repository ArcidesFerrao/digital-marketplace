import { AdminHeader } from "@/components/AdminHeader";
import getTransactions from "@/lib/getTransactions";
import React from "react";

export default async function ReportPage() {
  const data = await getTransactions();

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
                  <td>{`{item.title}`}</td>
                  <td>{item.sellerId}</td>
                  <td>MZN {item.amount}.00</td>
                  <td>{item.buyerId}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center">nenhuma transacao encontrada!</tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
