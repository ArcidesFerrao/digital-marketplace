import { getSeller } from "@/lib/getSeller";
import React from "react";
import DashboardClient from "./DashboardClient";
// import { Seller } from "@/types";

export default async function DashboardPage() {
  const id = "e5f7efda-c836-485d-b8e1-0f5e7356c775";

  if (!id) return <main>Id not found</main>;

  const seller = await getSeller(id);

  if (!seller) return <main>Seller not found</main>;

  return <DashboardClient seller={seller} />;
}
