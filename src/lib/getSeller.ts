import db from "@/db/db";

export async function getSeller(id: string) {
    if (!id) return null;
    console.log(id);
    return await db.user.findUnique({
        where: {
            id,
        },
        include: {
            products: true,
        }
    })

    
}