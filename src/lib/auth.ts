import db from "@/db/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
        async session({ session,  user}: {session: Session; user: User}){
                session.user = {
                ...session.user,
                // id: token.sub,
                name: user.name,
                email: user.email,
                image: user.image,
                }
            return session
        },
    },
} 