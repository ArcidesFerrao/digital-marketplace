"use server"

import db from "@/db/db";
import { messageSchema } from "@/schemas/messageSchema"
import { parseWithZod } from "@conform-to/zod"



export async function sendMessage(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: messageSchema });

    if (submission.status !== "success") {
        return {
            status: "error",
            error:  submission.error,
        }
    } 

    const { nome, apelido, email, assunto, mensagem } = submission.value;

    await db.message.create({
        data: {
            name: nome,
            lastName: apelido,
            email,
            subject: assunto,
            content: mensagem,
        }
    })
    
    return { 
            status: "success",
            message: "Mensagem enviada com sucesso!"
    }
    
}