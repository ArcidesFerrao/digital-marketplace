import { AdminHeader } from "@/components/AdminHeader";
import { getTransactions } from "@/lib/getTransactions";
import Link from "next/link";
import React from "react";

export default async function ReportPage() {
  const data = await getTransactions();

  if (!data) return <main>Transactions not found</main>;

  return (
    <main className="admin-section p-10 flex flex-col gap-10">
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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr className="text-sm" key={item.id}>
                  <td>
                    <Link href={`/transactions/${item.id}`}>
                      {item.product.title.length > 20
                        ? item.product.title.slice(0, 20) + "..."
                        : item.product.title}
                    </Link>
                  </td>
                  <td>
                    {item.seller.name.length > 15
                      ? item.seller.name.slice(0, 15) + "..."
                      : item.seller.name}
                  </td>
                  <td>MZN {item.amount}.00</td>
                  <td>
                    {item.buyer.name.length > 15
                      ? item.buyer.name.slice(0, 15) + "..."
                      : item.buyer.name}
                  </td>
                  <td>{item.createdAt.toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan={4}>nenhuma transacao encontrada!</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
