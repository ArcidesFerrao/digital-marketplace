"use client";

import React, { useState } from "react";
import { Seller } from "@/types";

interface DashboardClientProps {
  seller: Seller;
}

export default function DashboardClient({ seller }: DashboardClientProps) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <main className="seller-page flex gap-10 py-5">
      <section className="dash-nav w-fit">
        <nav className="flex flex-col">
          <div className="flex items-center px-5">
            <span className="iconamoon--home"></span>
            <button onClick={() => setActiveSection("dashboard")}>
              Dashboard
            </button>
          </div>
          <div className="flex items-center px-5">
            <span className="iconamoon--box-light"></span>
            <button>Products</button>
          </div>
          <div className="flex items-center px-5">
            <span className="iconamoon--clock-light"></span>
            <button>Sales History</button>
          </div>
          <div className="flex items-center px-5">
            <span className="iconamoon--settings-light"></span>
            <button>Account Settings</button>
          </div>
        </nav>
      </section>
      {activeSection === "dashboard" && <DashboardOverview seller={seller} />}
    </main>
  );
}

const DashboardOverview = ({ seller }: { seller: Seller }) => {
  const totalSales = seller.transactionsSold.length;

  const revenue = seller.transactionsSold.reduce(
    (sum, tx) => sum + tx.amount,
    0
  );

  const activeListings = seller.products.filter((p) => p.isApproved).length;

  return (
    <section className="main-dash w-full flex flex-col gap-5 px-5">
      <h1 className="text-4xl font-medium">Seller Dashboard</h1>
      <div className="sales-info flex justify-between">
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Total Sales</h3>
          <h2 className="text-2xl font-bold">{totalSales}</h2>
        </div>
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Revenue</h3>
          <h2 className="text-2xl font-bold">MZN {revenue}.00</h2>
        </div>
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Active Listings</h3>
          <h2 className="text-2xl font-bold">{activeListings}</h2>
        </div>
      </div>
      <div className="sales-details flex flex-col gap-4">
        <h3 className="text-xl font-bold">
          {seller?.name || " "}&apos;s Products
        </h3>
        <div className="dashboard-table overflow-x-auto rounded-lg">
          <table className=" w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {seller.products &&
                seller.products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>MZN {item.price}.00</td>
                    <td>{item.Transaction.length || 0}</td>
                    <td>Edit</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
