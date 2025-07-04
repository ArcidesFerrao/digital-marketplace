import db from "@/db/db";



export async function getSeller(id: string) {
    if (!id) return null;
    console.log(id);
    return await db.user.findUnique({
        where: {
            id,
        },
        include: {
            products: {
                include: {
                    Transaction: true,
                }
            },
            transactionsSold: {
                include: {
                    product: true,
                }
            },
        }
    })

    
}

export async function getSales(id: string) {
    if (!id) return null;

    const transactions = await db.transaction.findMany({
        where: {
            sellerId: id,
        },
        include: {
            product: true,
},
})   
     
    const totalAmount = transactions.reduce((sum, tx) => sum + tx.amount, 0)
    
   
    return {
        transactions,
        totalAmount,
    }
}