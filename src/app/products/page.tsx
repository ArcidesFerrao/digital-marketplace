import React from "react";
import { ListCard, ProductCard } from "../../components/List";
import { getApprovedProducts } from "@/lib/getProducts";
import FilterLink from "@/components/FilterLink";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const categoryRaw = params["category"];
  const queryRaw = params["query"];
  const sortRaw = params["sort"];

  const category = Array.isArray(categoryRaw) ? categoryRaw[0] : categoryRaw;
  const query = Array.isArray(queryRaw) ? queryRaw[0] : queryRaw ?? "";
  const sort =
    sortRaw === "asc"
      ? "asc"
      : typeof sortRaw === "string" && sortRaw.toLowerCase() === "asc"
      ? "asc"
      : "desc";

  const data = await getApprovedProducts({ category, sort, query });

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
    <main className="flex flex-col gap-5 p-5">
      <h2 className="text-4xl font-medium">Explore our products...</h2>
      <section className="filter-search flex items-center gap-4 p-2">
        <div className="filter-products flex gap-4">
          <p>Filter:</p>
          <FilterLink
            href="/products?sort=desc"
            label="Newest"
            active={sort === "desc"}
          />
          <FilterLink
            href="/products?sort=asc"
            label="Oldest"
            active={sort === "asc"}
          />
          <FilterLink
            href="/products?category=ebook"
            label="eBook"
            active={category === "ebook"}
          />
          <FilterLink
            href="/products?category=template"
            label="Template"
            active={category === "template"}
          />
          <FilterLink
            href="/products"
            label="Clear"
            active={!category && !sort}
          />
        </div>
        <form
          action="/products"
          method="GET"
          className="search-products relative flex items-center w-full"
        >
          <input
            type="text"
            name="query"
            defaultValue={query}
            className="w-full font-light text-sm"
            placeholder="Search..."
          />
          <button
            type="submit"
            aria-label="Search"
            className=" absolute right-3 flex items-center"
          >
            <span className="line-md--search"></span>
          </button>
        </form>
      </section>
      <section className="flex flex-col gap-y-5">
        {data.length === 0 ? (
          <div className="text-center text-muted-foreground py-10">
            <p>No products found!</p>
            <p>Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <div className="list-items grid grid-cols-3 gap-y-5 w-full">
            {data.map((item) => (
              <ListCard
                key={item.id}
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
                price={item.price}
                id={item.id}
                createdAt={item.createdAt}
              />
            ))}
          </div>
        )}
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
