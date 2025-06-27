import db from '@/db/db'

export default function getTransactions() {
  return (
    db.transaction.findMany({
        select: {
            id: true,
            amount: true,
            productId: true,
            sellerId: true,
            buyerId: true,
        }
    })
  )
}
