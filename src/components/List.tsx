import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Description } from "./Description";
import db from "@/db/db";

interface productProps {
  // id: number;
  title: string;
  image: string;
  width: number;
  price: string;
}
interface listProps {
  id: string;
  title: string;
  category: string;
  price: number;
  createdAt: Date;
}

export const List = async () => {
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
  ];

  const productList = await db.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      category: true,
      createdAt: true,
    },
    where: { isApproved: true },
    take: 10,
    orderBy: { createdAt: "desc" },
  });

  return (
    <section
      id="products"
      className="list-section flex flex-col items-center px-5 py-10 gap-10"
    >
      <div className="flex justify-between items-center w-full px-2">
        <h2 className="text-4xl font-medium">Explore our products...</h2>
        <Link href="/products">
          <p>see more {">"}</p>
        </Link>
      </div>
      <div className="list-items grid grid-cols-3 gap-y-5 justify-items-center w-full">
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
      <div className="list-items grid grid-cols-3 gap-y-5 justify-items-center w-full">
        {productList.map((item) => (
          <ListCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      <Description />
      <div className="list-items grid grid-cols-3 justify-items-center w-full">
        <div className="product-card flex flex-col gap-2">
          <Image
            src="/assets/contracts.png"
            alt="contracts template"
            width={200}
            height={200}
            priority={false}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">
              Freelancer Contract + Proposal Templates
            </h3>
            {/* <p className="font-extralight text-sm">
              A ready-to-use bundle to help beginner freelancers close deals
              with confidence.
            </p> */}
            <h3 className="text-lg font-bold">MZN 500.00</h3>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="product-card flex flex-col gap-2">
          <Image
            src="/assets/nextjs.png"
            alt="nextjs template"
            width={200}
            height={200}
            priority={false}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">
              Why Next.js is the Future of Web Development
            </h3>
            {/* <p className="font-extralight text-sm">
              A ready-to-use bundle to help beginner freelancers close deals
              with confidence.
            </p> */}
            <h3 className="text-lg font-bold">MZN 300.00</h3>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="product-card flex flex-col gap-2">
          <Image
            src="/assets/Beginner-Freelancer-2.png"
            alt="contracts template"
            width={200}
            height={200}
            priority={false}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">
              How to Get Clients as a Beginner Freelancer
            </h3>
            {/* <p className="font-extralight text-sm">
              A ready-to-use bundle to help beginner freelancers close deals
              with confidence.
            </p> */}
            <h3 className="text-lg font-bold">MZN 600.00</h3>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductCard = ({ title, width, price, image }: productProps) => {
  return (
    <div className="product-card flex flex-col gap-2">
      <Image
        src={image}
        alt="contracts template"
        width={width}
        height={width}
        priority={false}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">{title}</h3>

        <h3 className="text-lg font-bold">{price}</h3>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
export const ListCard = ({
  id,
  title,
  price,
  category,
  createdAt,
}: listProps) => {
  return (
    <div className="product-card flex flex-col gap-2">
      <Image
        src="/assets/Beginner-Freelancer-2.png"
        alt="contracts template"
        width={200}
        height={200}
        priority={false}
      />
      <div className="flex flex-col gap-2">
        <Link href={`/product/${id}`}>
          <h3 className="text-lg font-medium">{title}</h3>
        </Link>

        <h3 className="text-lg font-bold">MZN {price}.00</h3>
        <div className="flex justify-between">
          <p>{category}</p>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
