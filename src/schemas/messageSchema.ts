import { z } from "zod";

export const messageSchema = z.object({
    nome: z.string({ required_error: "Name is required!" }).min(2, "Name is required"),
    apelido: z.string({ required_error: "Last name is required!" }).min(2, "Apelido is required"),
    email: z.string({ required_error: "email is required!" }).email("Invalid email"),
    assunto: z.string().optional(),
    mensagem: z.string({ required_error: "Message is required!" }).min(5, "Message must be at least 5 characters")
})