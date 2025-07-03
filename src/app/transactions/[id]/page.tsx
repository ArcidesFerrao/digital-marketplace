import db from "@/db/db";
import Image from "next/image";
import Link from "next/link";

export default async function TransactionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return <main className="transaction-page">Transaction not found</main>;
  }

  const data = await db.transaction.findUnique({
    where: { id },
    include: {
      product: true,
      buyer: true,
    },
  });

  if (!data) {
    return <main className="transaction-page">Transaction not found</main>;
  }
  return (
    <main className="transaction-page flex flex-col items-center gap-4 p-16 ">
      <section className="header-transaction text-center flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Congratulations!</h2>
        <p>The file is ready to be downloaded. Click on the button bellow</p>
      </section>
      <section className="p-5">
        <Image
          className="rounded-lg"
          src={data.product.imageUrl}
          width={300}
          height={300}
          alt="product-image"
          unoptimized
        ></Image>
      </section>
      <section className="details-transaction  flex flex-col gap-4 ">
        <h2 className="text-details text-xl font-medium py-4">
          <Link href={data?.product.fileUrl}>Download File</Link>
        </h2>
        <h2 className="title-center text-lg font-medium ">
          {data.product.title}
        </h2>
        <div className="flex gap-10">
          <div className="info flex flex-col gap-2">
            <h3>Type of file</h3>
            <h3>Price</h3>
            <h3>Date</h3>
            <h3>Transaction ID</h3>
          </div>
          <div className="detail  flex flex-col gap-2">
            <p>PDF</p>
            <p>MZN {data.amount}.00</p>
            <p>{data.createdAt.toLocaleDateString()}</p>
            <p>{data.id}</p>
          </div>
        </div>
      </section>
      <section className="links-back flex p-2 my-5">
        <Link href="/products">Back to the Marketplace</Link>
      </section>
    </main>
  );
}
