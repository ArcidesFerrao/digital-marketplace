"use client";

import React, { useState } from "react";
import { Seller, Transaction } from "@/types";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface DashboardClientProps {
  seller: Seller;
  sales: Transaction[];
  totalAmount: number;
}

export default function DashboardClient({
  seller,
  sales,
  totalAmount,
}: DashboardClientProps) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <main className="seller-page flex gap-10 py-5">
      <section className="dash-nav w-fit flex flex-col justify-between">
        <nav className="flex flex-col">
          <button
            className="flex items-center gap-5 px-5"
            onClick={() => setActiveSection("dashboard")}
          >
            <span className="iconamoon--home"></span>
            Dashboard
          </button>
          <button
            className="flex items-center gap-5 px-5"
            onClick={() => setActiveSection("products")}
          >
            <span className="iconamoon--box-light"></span>
            Products
          </button>
          <button
            className="flex items-center gap-5 px-5"
            onClick={() => setActiveSection("sales")}
          >
            <span className="iconamoon--clock-light"></span>
            Sales History
          </button>
          <button className="flex items-center gap-5 px-5">
            <span className="iconamoon--settings-light"></span>
            Account Settings
          </button>
        </nav>
        <button
          onClick={() => signOut()}
          className="signout flex justify-between items-center gap-5 px-5"
        >
          <div>Sign Out</div>
          <span className="stashes--signout"></span>
        </button>
      </section>
      {activeSection === "dashboard" && <DashboardOverview seller={seller} />}
      {activeSection === "products" && (
        <ProductsList sales={sales} seller={seller} />
      )}
      {activeSection === "sales" && (
        <SalesHistory sales={sales} totalAmount={totalAmount} />
      )}
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
          <h2 className="text-2xl font-bold">
            MZN {revenue - revenue * 0.1}.00
          </h2>
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
                    <td>{item.Transaction?.length || 0}</td>
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

const SalesHistory = ({
  sales,
  totalAmount,
}: {
  sales: Transaction[];
  totalAmount: number;
}) => {
  return (
    <section className="main-dash w-full flex flex-col gap-5 px-5">
      <h1 className="text-4xl font-medium">Sales History</h1>
      <div className="sales-info flex gap-5">
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Total Sales</h3>
          <h2 className="text-2xl font-bold">{sales.length}</h2>
        </div>
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Revenue</h3>
          <h2 className="text-2xl font-bold">
            MZN {totalAmount - totalAmount * 0.1}.00
          </h2>
        </div>
      </div>
      <div className="sales-details flex flex-col gap-4">
        <div className="dashboard-table overflow-x-auto rounded-lg">
          <table className=" w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price Paid</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/transactions/${item.id}`}>
                      {item.product.title}
                    </Link>
                  </td>
                  <td>MZN {item.product.price}.00</td>
                  <td>{item.createdAt.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const ProductsList = ({
  seller,
  sales,
}: {
  seller: Seller;
  sales: Transaction[];
}) => {
  return (
    <section className="main-dash w-full flex flex-col gap-5 px-5">
      <h1 className="text-4xl font-medium">Sales History</h1>
      <div className="sales-info flex gap-5">
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Active Products</h3>
          <h2 className="text-2xl font-bold">{seller.products.length}</h2>
        </div>
        <div className="dash-card flex flex-col gap-2 p-5">
          <h3>Total Sales</h3>
          <h2 className="text-2xl font-bold">{sales.length}</h2>
        </div>
      </div>
      <div className="sales-details flex flex-col gap-4">
        <div className="dashboard-table overflow-x-auto rounded-lg">
          <table className=" w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              {seller.products.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/transactions/${item.id}`}>{item.title}</Link>
                  </td>
                  <td>MZN {item.price}.00</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
