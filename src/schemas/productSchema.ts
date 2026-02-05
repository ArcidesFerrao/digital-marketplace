import { z } from "zod";


export const productSchema = z.object({
    title: z.string({ required_error: "Product name is required!" }).min(2, "Name is too short!"),
    description: z.string({ required_error: "Product description is required" }).min(10, "Be more specific"),
    category: z.string({ required_error: "Category is required!" }).min(3),
    fileUrl: z.string({ required_error: "File URL is required!" }).url(),
    imageUrl: z.string({ required_error: "Image URL is required!" }).url(),
    price: z.coerce.number({ required_error: "Product price is required!" }).int().min(100, "Price is too low!" ),
})