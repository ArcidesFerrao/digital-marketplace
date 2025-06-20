import db from '@/db/db'

export async function markRead(id: string) {
  await db.message.update({
    where: {id},
    data: { 
        isRead: true
    },
  })
}
