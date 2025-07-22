import db from '@/db/db'

type GetProductsOptions = {
  category?: string;
  sort?: "asc" | "desc";
  query?: string;
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
      ...(options?.category && { category: options.category}),
      ...(options?.query && {
        title: {
          contains: options?.query,
          mode: "insensitive"
        }
      }) 
    },
    include: { seller: true },
    orderBy: {
      createdAt: options?.sort === "asc" ? "asc" : "desc",
    }
  })
}