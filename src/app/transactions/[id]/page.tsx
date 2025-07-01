import db from "@/db/db";

export default async function TransactionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return <main>Transaction not found</main>;
  }

  const data = await db.transaction.findUnique({
    where: { id },
  });

  return <main>{data?.amount}</main>;
}
