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
        <div className="flex">
          <label htmlFor="number">Price:</label>
          <input type="number" name="price" id="price" />
        </div>
        <div className="flex">
          <label htmlFor="number">Price:</label>
          <input type="number" name="price" id="price" />
        </div>

        <textarea name="detail" id="detail" />
      </section>
      <button>Submit</button>
    </form>
  );
};
