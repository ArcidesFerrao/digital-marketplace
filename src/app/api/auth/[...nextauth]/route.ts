
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const db = new PrismaClient;

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
    },
    callbacks: {
        async session({ session, token, user}){
            if (user) {
                session.user = {
                ...session.user,
                // id: token.sub,
                name: user.name,
                email: user.email,
                image: user.image,
                }
            } else if (token) {
                session.user = {
                ...session.user,
                // id: token.sub as string,
                name: token.name,
                email: token.email
                };
            }
            return session
        },
        async signIn({ user, account}) {
            if (account?.provider === "google" ) {
                    const existingAccount = await db.account.findUnique({
                            where: {
                                provider_providerAccountId: {
                                    provider: account.provider,
                                    providerAccountId: account.providerAccountId,
                                }
                            },
                    });
                    if (!existingAccount) {
                            const existingUser = await db.user.findUnique({
                                where: {
                                    email: user.email || "",
                                }
                            })
                            if (existingUser) {
                                await db.account.create({
                                    data: {
                                        userId: existingUser.id,
                                        provider: account.provider,
                                        type: account.provider,
                                        providerAccountId: account.providerAccountId,
                                        access_token: account.access_token ?? null,
                                    },
                                });
                        } else {
                                if (user) {
                                    const newUser = await db.user.create({
                                        data: {
                                            email: user.email!,
                                            name: user.name!,
                                            image: user.image,
                                            // password: user.password,
                                        }
                                    });
                                    await db.account.create({
                                        data: {
                                            userId: newUser.id,
                                            provider: account.provider,
                                            providerAccountId: account.providerAccountId,
                                            access_token: account.access_token,
                                            type: account.type,
                                }
                            })
                        }
                    }
                } 
            }
            return true;
        },
    },
    }
);

export const GET = handler;
export const POST = handler;
