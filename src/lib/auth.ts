import db from "@/db/db";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import type { SessionStrategy } from "next-auth";


export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    Google({
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET!,
  })],
  session: { strategy: "jwt" as SessionStrategy },
  
};

export default NextAuth(authOptions)