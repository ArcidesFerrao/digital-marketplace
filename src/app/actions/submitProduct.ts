"use server"

import db from "@/db/db";
import  {authOptions}  from "@/lib/auth";
import { productSchema } from "@/schemas/productSchema";
import { parseWithZod } from "@conform-to/zod";
import { getServerSession } from "next-auth/next";


export async function submitProduct(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: productSchema });

    if (submission.status !== "success") {
        return {
            status: "error",
            error: submission.error,
        }
    }

    const {title, price, category, description, fileUrl, imageUrl,  } = submission.value;

    const session = await getServerSession(authOptions as any);

    const userEmail = session?.user?.email;
    if (!userEmail) {
        return {
            status: "unauthorized",
            error: "You have to be authenticated!",
        }
    }
   
    const userData = await db.user.findFirst({
        where: {
            email: userEmail ,
        }
    })
    if (!userData) {
        return {
            status: "unauthorized",
            error: "You have to be authenticated!"
        }
    }

    

    await db.product.create({
        data: {
            title,
            price,
            category,
            description,
            fileUrl,
            imageUrl,
            sellerId: userData.id,
            isApproved: false,
        },
        
    })

    return {
        status: "success",
        message: "Product successfully submited!"
    }
}