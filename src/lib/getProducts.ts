import db from '@/db/db'

export async function getProducts() {
  return await db.product.findMany({
    where: { isApproved: false },
    include: { seller: true },
  })
}

export async function getApprovedProducts() {
  return await db.product.findMany({
    where: { isApproved: true },
    include: { seller: true },
  })
}