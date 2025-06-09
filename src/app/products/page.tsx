import React from "react";
import { ProductCard } from "../components/List";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "Freelancer Contract + Proposal Templates",
      image: "/assets/contracts.png",
      width: 200,
      price: "MZN 500.00",
    },
    {
      id: 2,
      title: "Why Next.js is the Future of Web Development",
      image: "/assets/nextjs.png",
      width: 200,
      price: "MZN 300.00",
    },
    {
      id: 3,
      title: "How to Get Clients as a Beginner Freelancer",
      image: "/assets/Beginner-Freelancer-2.png",
      width: 200,
      price: "MZN 600.00",
    },
    {
      id: 4,
      title: "Freelancer Contract + Proposal Templates",
      image: "/assets/contracts.png",
      width: 200,
      price: "MZN 500.00",
    },
    {
      id: 5,
      title: "Why Next.js is the Future of Web Development",
      image: "/assets/nextjs.png",
      width: 200,
      price: "MZN 300.00",
    },
    {
      id: 6,
      title: "How to Get Clients as a Beginner Freelancer",
      image: "/assets/Beginner-Freelancer-2.png",
      width: 200,
      price: "MZN 600.00",
    },
  ];
  return (
    <main className="flex flex-col gap-10 p-5">
      <h2 className="text-4xl font-medium">Explore our products...</h2>
      <section>
        <div className="list-items grid grid-cols-3 gap-y-5 w-full">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              width={item.width}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
