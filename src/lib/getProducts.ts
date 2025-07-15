import db from '@/db/db'

type GetProductsOptions = {
  category?: string;
  sort?: "asc" | "desc";
}
export async function getProducts() {
  return await db.product.findMany({
    where: { isApproved: false },
    include: { seller: true },
  })
}

export async function getApprovedProducts(options?: GetProductsOptions) {
  return await db.product.findMany({
    where: { 
      isApproved: true,
      ...(options?.category && { category: options.category}) 
    },
    include: { seller: true },
    orderBy: {
      createdAt: options?.sort === "asc" ? "asc" : "desc",
    }
  })
}