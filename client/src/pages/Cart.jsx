import React from "react";
import { useCart } from "../components/CartContext";
import MainLayout from "../layout/MainLayout";

export default function Cart() {
  const { cartItems = [], removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    // Redirect to a mock checkout page or perform payment logic
    window.open("https://www.example.com/checkout", "_blank");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#f5fdf9] p-8 font-sans">
        <h1 className="text-3xl font-bold text-[#2e604a] mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-28 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#2e604a]">
                    {item.product}
                  </h2>
                  <p className="text-gray-600 text-sm">Price: ₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total and Buy Button */}
            <div className="pt-4 border-t text-right space-y-4">
              <div className="text-xl font-bold text-[#2e604a]">
                Total: ₹{total}
              </div>
              <button
                onClick={handleBuyNow}
                className="bg-[#2e604a] hover:bg-[#24503e] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
