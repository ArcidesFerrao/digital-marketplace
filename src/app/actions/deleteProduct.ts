"use server"

import db from "@/db/db";


export async function deleteProduct(prevState: unknown, formData:FormData) {
    const productId = formData.get("productId") as string;

    await db.product.delete({
        where: {
            id: productId,
        },
    });
    return { 
        status: "success", 
        message: "Produto apagado com sucesso!" 
    };
}