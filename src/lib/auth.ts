import db from "@/db/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { AuthOptions } from "next-auth/core/types";

// import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(db),
    session: {
        strategy: "database" as const,
        maxAge: 24 * 60 * 60, 
    },
    callbacks: {
        async session({ session,  user}){
                session.user = {
                ...session.user,
                name: user.name,
                email: user.email,
                image: user.image,
                }
            return session
        },
    },
} 

// export default NextAuth(authOptions);