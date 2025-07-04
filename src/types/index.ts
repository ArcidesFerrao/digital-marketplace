export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  fileUrl: string;
  imageUrl: string;
  isApproved: boolean;
  sellerId: string;
  createdAt: Date;
  Transaction?: { id: string }[];
};

export type Transaction = {
  id: string;
  amount: number;
  createdAt: Date;
  product: {
    title: string;
    price: number;
  };
}

export type Seller = {
  id: string;
  name: string;
  email: string;
  password: string;
  isPremium: boolean;
  balance: number;
  products: Product[];
  transactionsSold: Transaction[];
};

export type Sales = {
  id: string;
        title: string;
        price: number;
        category: string;
        description: string;
        fileUrl: string;
        imageUrl: string;
        isApproved: boolean;
        sellerId: string;
        createdAt: Date;
        product: Product;
        seller: Seller;
}