import { getSales, getSeller } from "@/lib/getSeller";
import React from "react";
import DashboardClient from "./DashboardClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
// import { Seller } from "@/types";

export default async function DashboardPage() {
  // const id = "e5f7efda-c836-485d-b8e1-0f5e7356c775";

  const session = await getServerSession(authOptions);

  if (!session?.user) return <main>Id not found</main>;

  const seller = await getSeller(session.user.email || " ");

  if (!seller) return <main>Seller not found</main>;
  const sales = await getSales(session.user.email || " ");

  if (!sales) return <main>Sales not found</main>;
  return (
    <DashboardClient
      seller={seller}
      sales={sales.transactions}
      totalAmount={sales.totalAmount}
    />
  );
}
