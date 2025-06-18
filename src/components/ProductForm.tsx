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
          name="detail"
          id="detail"
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
      <button>Submit</button>
    </form>
  );
};
