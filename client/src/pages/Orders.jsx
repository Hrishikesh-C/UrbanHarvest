// src/pages/Orders.jsx
import React from "react";
import { useCart } from "../components/CartContext";
import MainLayout from "../layout/MainLayout";

export default function Orders() {
  const { cartItems } = useCart();

  const handleBuy = (item) => {
    window.open("https://www.example.com/buy", "_blank");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#f5fdf9] p-8 font-sans">
        <h1 className="text-3xl font-bold text-[#2e604a] mb-6">Your Orders</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">You haven’t placed any orders yet.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.product}
                  className="w-32 h-28 object-cover rounded-lg border border-[#dbb78a]"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#2e604a] mb-1">
                    {item.product}
                  </h2>
                  <p className="text-gray-600 text-md">Price: ₹{item.price}</p>
                  <p className="text-gray-500 text-sm mt-1">Thank you for your order!</p>
                </div>
                <button
                  onClick={() => handleBuy(item)}
                  className="bg-[#2e604a] hover:bg-[#24503e] text-white px-5 py-2 rounded-lg"
                >
                  Buy Again
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
