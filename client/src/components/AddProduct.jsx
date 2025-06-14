import React, { useState } from "react";

export default function AddProductModal({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: `P${Math.floor(Math.random() * 10000)}`,
      name,
      price: parseFloat(price),
      stock,
      image: image || "https://source.unsplash.com/160x100/?vegetable",
    };
    onAdd(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[#2e604a]">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Stock (e.g., 5 kg)"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <input
            type="url"
            placeholder="Image URL (optional)"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#2e604a] text-white rounded hover:bg-[#244d3a]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
