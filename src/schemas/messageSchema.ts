import { z } from "zod";

export const messageSchema = z.object({
    nome: z.string().min(2, "Name is required"),
    apelido: z.string().min(2, "Apelido is required"),
    email: z.string().email("Invalid email"),
    assunto: z.string().optional(),
    mensagem: z.string().min(5, "Message must be at least 5 characters")
})