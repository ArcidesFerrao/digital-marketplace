"use server"

import db from "@/db/db";
import { redirect } from "next/navigation";

export async function createTransaction(formData:FormData) {
    const productId = formData.get("productId") as string;
    const amount = Number(formData.get("amount") as string);
    const sellerId = formData.get("sellerId") as string;
    const buyerId ="a78a64de-ec57-49f5-a279-eda8fcc0f922";
    
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