import React from "react";

export const ProductForm = () => {
  return (
    <form
      className="flex flex-col justify-between min-w-96 gap-5 p-10"
      id="product"
    >
      <section>
        <h2 className="text-4xl font-medium">Submit Product</h2>
      </section>
      <section className="flex flex-col gap-5">
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <div className="flex gap-2 items-center">
          <label htmlFor="number">Price:</label>
          <input type="number" name="price" id="price" />
        </div>
        <fieldset className="flex">
          <legend>Category</legend>
          <span>
            <input
              type="radio"
              name="category"
              value="ebook"
              className="sr-only"
            />{" "}
            E-book
          </span>
          <span>
            <input
              type="radio"
              name="category"
              value="template"
              className="sr-only"
            />{" "}
            Template
          </span>
          <span>
            <input
              type="radio"
              name="category"
              value="pack"
              className="sr-only"
            />{" "}
            Music Pack
          </span>
          <span>
            <input
              type="radio"
              name="category"
              value="stock"
              className="sr-only"
            />{" "}
            Stock Photography
          </span>
        </fieldset>

        <textarea
          name="detail"
          id="detail"
          placeholder="About the product..."
        />
      </section>
      <button>Submit</button>
    </form>
  );
};
