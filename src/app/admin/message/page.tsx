import { AdminHeader } from "@/components/AdminHeader";
import { getMessages } from "@/lib/getMessages";
import Link from "next/link";
import React from "react";

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />

      <table className="w-full">
        <thead>
          <tr>
            <th className="flex gap-2">
              <h2>Messages</h2>
              {messages.length === 0 ? (
                <p>No messages found</p>
              ) : (
                <p>({messages.length})</p>
              )}
            </th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id}>
              <td> {msg.name + " " + msg.lastName}</td>
              <td>
                {" "}
                <Link
                  href={`/admin/messages/${msg.id}`}
                  className={msg.isRead ? "font-light" : "font-bold"}
                >
                  {msg.subject}
                </Link>
              </td>
              <td>{new Date(msg.createdAt).toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
