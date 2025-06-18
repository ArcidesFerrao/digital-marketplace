"use server"

import { messageSchema } from "@/schemas/messageSchema"
import { parseWithZod } from "@conform-to/zod"



export async function sendMessage(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: messageSchema });

    if (submission.status !== "success") return submission.error;



}