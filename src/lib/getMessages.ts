import db from '@/db/db'

export async function getMessages() {
  return await db.message.findMany({
    orderBy: {createdAt: "desc"}
  })
}
