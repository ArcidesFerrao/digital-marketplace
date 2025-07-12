import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

export const db = new PrismaClient;

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(db),
    session: {
        strategy: "database",
        maxAge: 24 * 60 * 60, 
    },
    callbacks: {
        async session({ session, user}){
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
);

export const GET = handler;
export const POST = handler;
