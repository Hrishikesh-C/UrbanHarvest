import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import SellerLayout from "../layout/SellerLayout";
import AddProductModal from "../components/AddProduct";
import spinach1 from "../assets/spinach1.jpeg"

const initialProducts = [
  {
    id: "P001",
    name: "Organic Spinach",
    price: 60,
    stock: "5 kg",
    image: [spinach1],
  },
  {
    id: "P002",
    name: "Tomatoes",
    price: 40,
    stock: "10 kg",
    image: "https://media.istockphoto.com/id/1299586597/photo/indeterminate-tomato-plants-growing-outside-in-uk.jpg?s=612x612&w=0&k=20&c=XqvpohIQda3X_uqf2GLh_CwUKJAN3SYgqF2Hlo8thSM=",
  },
  {
    id: "P003",
    name: "Lettuce",
    price: 55,
    stock: "7 kg",
    image: "https://media.istockphoto.com/id/815950794/photo/lettuce-in-rows-in-the-vegetable-garden.jpg?s=612x612&w=0&k=20&c=WWnw5gp7qHr5B_ieKcJUNMz5m7BwtsJuoLKUDCRUUO8=",
  },
];

export default function ManageProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for product ${id} is coming soon!`);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <SellerLayout>
      <div className="p-6 bg-[#f9fefb]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#2e604a]">Manage Products</h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-[#DBB78A] hover:bg-[#cba46f] text-white font-medium px-4 py-2 rounded shadow"
          >
            <FaPlus /> Add Product
          </button>
        </div>

        {showModal && (
          <AddProductModal
            onAdd={handleAddProduct}
            onClose={() => setShowModal(false)}
          />
        )}

        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-[#2e604a] border-b">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4">₹{product.price}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3 text-lg">
                      <button
                        className="text-[#527a6e] hover:text-green-700"
                        onClick={() => handleEdit(product.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SellerLayout>
  );
}
