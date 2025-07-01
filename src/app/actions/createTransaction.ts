"use server"

import db from "@/db/db";

export async function createTransaction(formData:FormData) {
    const productId = formData.get("productId") as string;
    const amount = formData.get("amount") as string;
    const sellerId = formData.get("sellerId") as string;
    
    await db.transaction.create({
        data: {
            productId,
            amount: Number(amount),
            sellerId,
            buyerId: "a78a64de-ec57-49f5-a279-eda8fcc0f922",
        }
    })
}