import db from '@/db/db'

export default function getTransactions() {
  return (
    db.transaction.findMany({
        include: {
            buyer: true,
            product: true,
            seller: true,
            
        }
    })
  )
}
