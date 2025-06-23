"use server"


import db from "@/db/db";



export async function approveProduct(prevState: unknown, formData:FormData) {
    const productId = formData.get("productId") as string;

    await db.product.update({
        where: {
            id: productId,
        },
        data: {
            isApproved: true,
        },
    });

    return { 
        status: "success", 
        message: "Produto aprovado com suceso!" 
    };
}