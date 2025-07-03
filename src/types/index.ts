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
  
};

export type Seller = {
  id: string;
  name: string;
  email: string;
  password: string;
  isPremium: boolean;
  balance: number;
  products?: Product[];
};