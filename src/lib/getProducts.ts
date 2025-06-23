import db from '@/db/db'

export async function getProducts() {
  return await db.product.findMany({
    where: { isApproved: false },
    include: { seller: true },
  })
}
