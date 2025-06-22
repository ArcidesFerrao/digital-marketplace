import { AdminHeader } from "@/components/AdminHeader";
import db from "@/db/db";
import React from "react";

export default async function MessagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const message = await db.message.findUnique({
    where: { id },
  });
  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />

      <section className="message flex flex-col gap-5 p-5">
        <h2>Message from: {`${message?.name}  ${message?.lastName}`}</h2>
        <p>{new Date(message?.createdAt).toLocaleDateString()}</p>
        <div className="content-msg">
          <p>{message?.content}</p>
        </div>
      </section>
      <section className="reply-msg">
        <button>Reply</button>
      </section>
    </main>
  );
}
