import React from "react";

export const ProductForm = () => {
  return (
    <form
      className="flex flex-col justify-between min-w-80 gap-5 p-8"
      id="product"
    >
      <section>
        <h2 className="text-4xl font-medium">Submit Product</h2>
      </section>
      <section className="flex flex-col gap-5">
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <div className="flex gap-2">
          <label htmlFor="number">Price:</label>
          <input type="number" name="price" id="price" />
        </div>
        <fieldset className="flex flex-col">
          <legend>Category:</legend>
          <span>
            <input type="radio" name="category" value="ebook" /> E-book
          </span>
          <span>
            <input type="radio" name="category" value="template" /> Template
          </span>
          <span>
            <input type="radio" name="category" value="pack" /> Music Pack
          </span>
          <span>
            <input type="radio" name="category" value="stock" /> Stock
            Photography
          </span>
        </fieldset>

        <textarea name="detail" id="detail" />
      </section>
      <button>Submit</button>
    </form>
  );
};
