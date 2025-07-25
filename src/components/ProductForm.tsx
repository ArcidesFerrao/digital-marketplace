"use client";

import { submitProduct } from "@/app/actions/submitProduct";
import { productSchema } from "@/schemas/productSchema";
import { UploadDropzone } from "@/utils/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Image from "next/image";
import React, { useActionState, useEffect, useState } from "react";

import toast from "react-hot-toast";

type ProductFormProps = {
  product?: {
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
};

export const ProductForm = ({ product }: ProductFormProps) => {
  const [state, action, pending] = useActionState(submitProduct, undefined);

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [imageUrl, setImageUrl] = useState<string>(product?.imageUrl || "");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (state?.status === "success" && state.message) {
      toast.success(state.message, {
        style: {
          border: "1px solid var(--hover)",
          padding: "1rem",
          color: "var(--accent)",
        },
      });
    } else if (state?.status === "unauthorized" && state.error) {
      toast.error(state.error.toString(), {
        style: {
          border: "1px solid var(--hover)",
          padding: "1rem",
          color: "var(--accent)",
        },
      });
    }
  }, [state]);

  return (
    <form
      className="product-form flex flex-col justify-between min-w-96 gap-5 p-10"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
    >
      <section>
        <h2 className="text-4xl font-medium">Submit Product</h2>
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <div className="name-price-form flex items-center gap-5">
              <input
                type="text"
                name="title"
                id="title"
                className="min-w-72"
                placeholder="Product Name"
              />
              <div className="price-input flex gap-2 items-center">
                <label htmlFor="number" className="text-lg">
                  Price:
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                <h2>MZN {price}.00</h2>
              </div>
            </div>
          </div>
          {fields.title.errors && <p>{fields.title.errors}</p>}
          {fields.price.errors && <p>{fields.price.errors}</p>}
        </div>
        <fieldset className="flex gap-2">
          <legend>Category</legend>
          <label className="radio">
            <input
              type="radio"
              name="category"
              value="ebook"
              // defaultChecked
              // className="sr-only"
            />
            <span className="category-span">E-book</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="category"
              value="template"
              // className="sr-only"
            />
            <span className="category-span">Template</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="category"
              value="pack"
              // className="sr-only"
            />
            <span className="category-span">Music Pack</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="category"
              value="stock"
              // className="sr-only"
            />
            <span className="category-span">Stock Photography</span>
          </label>
        </fieldset>
        {fields.category.errors && <p>{fields.category.errors}</p>}

        <input type="hidden" name="imageUrl" id="imageUrl" value={imageUrl} />
        {imageUrl !== "" ? (
          <div className="flex justify-center">
            <Image
              src={imageUrl}
              alt="product"
              width={300}
              height={300}
              unoptimized
              className="rounded-lg"
            />
          </div>
        ) : (
          <UploadDropzone
            className="max-h-60 uploadthing"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].ufsUrl);
            }}
            onUploadError={() => {
              alert("something went wrong");
            }}
          />
        )}
        {fields.imageUrl.errors && <p>{fields.imageUrl.errors}</p>}

        <textarea
          name="description"
          id="description"
          placeholder="About the product..."
        />
        {fields.description.errors && <p>{fields.description.errors}</p>}

        <div className="flex flex-col">
          <input
            type="url"
            name="fileUrl"
            id="fileUrl"
            placeholder="File/Folder Url"
          />
          <p>Product will be approved after the Url is checked.</p>
          {fields.fileUrl.errors && <p>{fields.fileUrl.errors}</p>}
        </div>
      </section>
      <input
        type="submit"
        value={pending ? "..." : "Submit"}
        id="submit"
        disabled={pending}
      />
    </form>
  );
};
