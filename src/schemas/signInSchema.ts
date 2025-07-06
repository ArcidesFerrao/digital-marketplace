import { object, string } from "zod";

export const signInSchema = object({
    email: string({ required_error: "Email is required" }).min(1, "Email is required").email("Invalid email"),
    password: string({ required_error: "Password is required" }).min(1, "Password required").min(5, "password must be more than 5 characters").max(32, "Password must beb less than 32 characters"),
})