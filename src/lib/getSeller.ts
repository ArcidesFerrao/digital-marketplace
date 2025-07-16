import db from "@/db/db";



export async function getSeller(email: string) {
    if (!email) return null;
    return await db.user.findUnique({
        where: {
            email,
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

export async function getSales(email: string) {
    if (!email) return null;

    const transactions = await db.transaction.findMany({
        where: {
            seller: {
                email
            }
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