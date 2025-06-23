"use client";

import { submitProduct } from "@/app/actions/submitProduct";
import { productSchema } from "@/schemas/productSchema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export const ProductForm = () => {
  const [state, action, pending] = useActionState(submitProduct, undefined);

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (state?.status === "success" && state.message) {
      toast.success(state.message, {
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
        <div className="flex items-center gap-5">
          <input
            type="text"
            name="title"
            id="title"
            className="min-w-72"
            placeholder="Product Name"
          />
          {fields.title.errors && <p>{fields.title.errors}</p>}
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="number">Price:</label>
          <input type="number" name="price" id="price" />
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

        <textarea
          name="description"
          id="description"
          placeholder="About the product..."
        />
        <div className="flex flex-col">
          <input
            type="url"
            name="fileUrl"
            id="fileUrl"
            placeholder="File/Folder Url"
          />
          <p>Product will be approved after the Url is checked.</p>
        </div>
      </section>
      <input type="submit" value={pending ? "..." : "Submit"} id="submit" />
    </form>
  );
};
