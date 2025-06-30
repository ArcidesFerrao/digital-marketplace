import { z } from "zod";


export const productSchema = z.object({
    title: z.string().min(2, "Nome muito curto!"),
    description: z.string().min(10, "Seja mais especifico"),
    category: z.string().min(3),
    fileUrl: z.string().url(),
    imageUrl: z.string().url(),
    price: z.coerce.number().int().min(10),
})