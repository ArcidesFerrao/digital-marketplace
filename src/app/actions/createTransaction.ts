"use server"

import db from "@/db/db";
import { authOptions } from "@/lib/auth";
import { randomUUID } from "crypto";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export async function createTransaction(formData:FormData) {
    const productId = formData.get("productId") as string;
    const amount = Number(formData.get("amount") as string);
    const sellerId = formData.get("sellerId") as string;
    const session = await getServerSession(authOptions);
    let buyerId: string;

    if (session?.user?.email) {
        const buyer = await db.user.findUnique({
            where: { email: session.user.email },
        })

        if (!buyer) {
            throw new Error("authenticated user not found");
        }

        buyerId = buyer.id;

    } else {
        const guest = await db.user.create({
            data: {
                name: "Guest",
                email: `guest-${randomUUID()}@example.com`,
                // isGuest: true,
            }
        })

        buyerId = guest.id;
    }

    const [transaction] = await db.$transaction([
        db.transaction.create({
            data: {
                productId,
                amount,
                sellerId,
                buyerId,
            }
        }),

        db.user.update({
            where: { id: sellerId },
            data: {
                balance: {
                    increment: amount,
                }
            }
        })
    ])

    redirect(`/transactions/${transaction.id}`);
}