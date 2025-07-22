"use client";

import { markRead } from "@/app/actions/markRead";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

export default function MsgSubject({
  id,
  subject,
  isRead,
}: {
  id: string;
  subject: string;
  isRead: boolean;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await markRead(id);
      router.push(`/admin/message/${id}`);
    });
  };
  return (
    <td
      onClick={handleClick}
      className={`cursor-pointer transition ${pending ? "opacity-20" : ""} ${
        isRead ? "font-extralight opacity-60" : "font-bold"
      }`}
    >
      {subject}
    </td>
  );
}
