"se client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductProps = {
  isOpen: boolean;
  onClose: () => void;

  onCreate: (formData: ProductFormData) => void;
};

function CreateProductModal({ isOpen, onClose, onCreate }: CreateProductProps) {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  if (!isOpen) return null;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name == "price" || name == "rating" || name == "stockQuantity"
          ? parseFloat(value)
          : value,
    });
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onCreate(formData);
    onClose();
  }

  const labelCssClass = "block text-sm font-medium text-gray-700";
  const inputCssClass =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md ";
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full z-20 overflow-y-auto">
      {" "}
      {/* Innner content inside Modal */}
      <div className="relative top-60 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create a new Product" />

        {/* Form */}

        <form onSubmit={handleSubmit} className="mt-5">
          {/* Product Name */}
          <label htmlFor="productName" className={labelCssClass}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData?.name}
            onChange={handleChange}
            className={inputCssClass}
            required
          />

          {/* Product Price */}

          <label htmlFor="price" className={labelCssClass}>
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData?.price}
            onChange={handleChange}
            className={inputCssClass}
            required
          />

          {/* Product Stock Quantity */}

          <label htmlFor="stockQuantity" className={labelCssClass}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={formData?.stockQuantity}
            onChange={handleChange}
            className={inputCssClass}
            required
          />
          {/* Product Rating */}

          <label htmlFor="rating" className={labelCssClass}>
            Product Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData?.rating}
            onChange={handleChange}
            className={inputCssClass}
            required
          />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProductModal;
