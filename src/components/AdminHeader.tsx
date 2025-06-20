import Link from "next/link";
import React from "react";

export const AdminHeader = () => {
  return (
    <section className="dash-header flex justify-between">
      <Link href="/admin">
        <h2>Dashboard</h2>
      </Link>
      <div className="flex gap-2">
        <Link href="/admin/request">Requests</Link>
        <Link href="/admin/report">Report</Link>
        <Link href="/admin/message">Messages</Link>
      </div>
    </section>
  );
};
