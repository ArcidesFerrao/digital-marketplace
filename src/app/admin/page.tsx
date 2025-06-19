import Link from "next/link";
import React from "react";

export default function AdminPage() {
  return (
    <main className="admin-section p-10 flex flex-col justify-around">
      <section className="dash-header flex justify-between">
        <h2>Dashboard</h2>
        <div className="flex gap-2">
          <Link href="/">Requests</Link>
          <Link href="/">Report</Link>
          <Link href="/admin/message">Messages</Link>
        </div>
      </section>
      <section className="flex justify-around">
        <div className="dash-card">
          <h3>Produtos</h3>
          <p>12</p>
        </div>
        <div className="dash-card">
          <h3>Vendas</h3>
          <p>83</p>
        </div>
      </section>
    </main>
  );
}
