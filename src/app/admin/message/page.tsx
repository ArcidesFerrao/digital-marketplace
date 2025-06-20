import { AdminHeader } from "@/components/AdminHeader";
import { getMessages } from "@/lib/getMessages";
import React from "react";

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />
      <section className="flex gap-2">
        <h2>Messages</h2>
        {messages.length === 0 ? (
          <p>No messages found</p>
        ) : (
          <p>({messages.length})</p>
        )}
      </section>
    </main>
  );
}
