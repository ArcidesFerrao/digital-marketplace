import { AdminHeader } from "@/components/AdminHeader";
import React from "react";

export default function AdminPage() {
  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />
      <section className="overview flex justify-around">
        <div className="dash-card">
          <h3>Produtos</h3>
          <h1>12</h1>
        </div>
        <div className="dash-card">
          <h3>Total de Vendas</h3>
          <h1>830.00 MZN</h1>
        </div>
        <div className="dash-card">
          <h3>Pedidos</h3>
          <h1>156</h1>
        </div>
      </section>
    </main>
  );
}
