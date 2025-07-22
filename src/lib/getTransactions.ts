import db from '@/db/db'

export async function getTransactions() {
  return (
    await db.transaction.findMany({
        include: {
            buyer: true,
            product: true,
            seller: true,
            
        }
    })
  )
}
export async function getOrderedTransactions() {
  return (
    await db.transaction.findMany({
        select: {
          createdAt: true,
          amount: true,
        },
        orderBy: {
          createdAt: "asc"
        }
    })
  )
}

export async function getTotalAmount() {
  return (
    await db.transaction.aggregate({
      _sum: {
        amount: true,
      }
    })
  )
}