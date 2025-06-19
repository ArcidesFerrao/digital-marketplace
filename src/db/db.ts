import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db 

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db

// const globalForPrisma = globalThis as unknown as {
//     prismaGlobal: PrismaClient | undefined;
// }


// const db = globalForPrisma.prismaGlobal ?? new PrismaClient();


// if (process.env.NODE_ENV !== "production") globalForPrisma.prismaGlobal = db;

// export default db;