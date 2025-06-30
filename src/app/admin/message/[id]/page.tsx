import { AdminHeader } from "@/components/AdminHeader";
import db from "@/db/db";
import Link from "next/link";
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

  if (!message) {
    return (
      <main className="admin-section p-20 flex flex-col gap-10">
        <AdminHeader />
        <div className="content-msg  p-10">
          <p>Mensagem nao encontrada</p>
        </div>
      </main>
    );
  }
  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />

      <section className="message-section flex flex-col">
        <div className="header-msg flex justify-between  p-5">
          <h2>Message from: {`${message?.name}  ${message?.lastName}`}</h2>
          <p>{new Date(message.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="content-msg  p-10">
          <p>{message?.content}</p>
        </div>
      </section>
      <section className="reply-msg">
        <Link href={`mailto:${message.email}?subject=Reply to your message`}>
          Reply
        </Link>
      </section>
    </main>
  );
}
