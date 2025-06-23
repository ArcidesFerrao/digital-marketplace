"use server"

import db from "@/db/db";
import { productSchema } from "@/schemas/productSchema";
import { parseWithZod } from "@conform-to/zod";




export async function submitProduct(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: productSchema });

    if (submission.status !== "success") {
        return {
            status: "error",
            error: submission.error,
        }
    }

    const {title, price, category, description, fileUrl } = submission.value;

    await db.product.create({
        data: {
            title,
            price,
            category,
            description,
            fileUrl,
            sellerId: "e5f7efda-c836-485d-b8e1-0f5e7356c775",
        },
        
    })

    return {
        status: "success",
        message: "Produto submetido com sucesso!"
    }
}