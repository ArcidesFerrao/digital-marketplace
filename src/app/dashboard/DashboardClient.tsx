"use client";

import React, { useState } from "react";
import { Seller } from "@/types";

interface DashboardClientProps {
  seller: Seller;
}

export default function DashboardClient({ seller }: DashboardClientProps) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <main className="flex gap-10">
      <section className="dash-nav">
        <nav className="flex flex-col">
          <button onClick={() => setActiveSection("dashboard")}>
            Dashboard
          </button>
          <button>Products</button>
          <button>Sales History</button>
          <button>Account Settings</button>
        </nav>
      </section>
      {activeSection === "dashboard" && <DashboardOverview seller={seller} />}
    </main>
  );
}

const DashboardOverview = ({ seller }: { seller: Seller }) => {
  return (
    <section className="main-dash flex flex-col gap-5">
      <h1 className="text-4xl font-medium">Seller Dashboard</h1>
      <div className="sales-info flex justify-between">
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Total Sales</h3>
          <h2 className="text-2xl font-bold">1325</h2>
        </div>
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Revenue</h3>
          <h2 className="text-2xl font-bold">MZN 1300.00</h2>
        </div>
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Active Listings</h3>
          <h2 className="text-2xl font-bold">27</h2>
        </div>
      </div>
      <div className="sales-details flex flex-col gap-4">
        <h3 className="text-xl font-bold">
          {seller?.name || " "}&apos;s Products
        </h3>
        <table className="dashboard-table rounded-lg w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Digital Art</td>
              <td>MZN 550.00</td>
              <td>43</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
