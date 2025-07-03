/*
  Warnings:

  - You are about to drop the `_BuyerTransactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SellerTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BuyerTransactions" DROP CONSTRAINT "_BuyerTransactions_A_fkey";

-- DropForeignKey
ALTER TABLE "_BuyerTransactions" DROP CONSTRAINT "_BuyerTransactions_B_fkey";

-- DropForeignKey
ALTER TABLE "_SellerTransactions" DROP CONSTRAINT "_SellerTransactions_A_fkey";

-- DropForeignKey
ALTER TABLE "_SellerTransactions" DROP CONSTRAINT "_SellerTransactions_B_fkey";

-- DropTable
DROP TABLE "_BuyerTransactions";

-- DropTable
DROP TABLE "_SellerTransactions";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
