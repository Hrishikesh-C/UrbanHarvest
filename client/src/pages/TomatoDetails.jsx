import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { FaPlus, FaMinus, FaPhoneAlt, FaEnvelope, FaStar } from "react-icons/fa";
import tomato from "../assets/tomoto.jpeg";
import tomato1 from "../assets/tomato1.jpeg";
import tomato2 from "../assets/tomato2.jpeg";
import MainLayout from "../layout/MainLayout";

export default function TomatoDetails() {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1000); // in grams

  const inc = () => setQty((q) => q + 1000);
  const dec = () => setQty((q) => (q > 1000 ? q - 1000 : 1000));
  const placeOrder = () => {
    addToCart({ product: "Fresh Tomatoes", price: 100, quantity: qty });
    alert("Order placed!");
  };

  return (
    <MainLayout>
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Left Panel */}
        <div className="bg-[#7EA88F] flex-1 rounded-2xl shadow-xl p-6 text-center text-white">
          <img
            src={tomato}
            alt="Fresh Tomatoes"
            className="w-24 h-24 mb-4 rounded-full mx-auto object-cover"
          />
          <h2 className="text-2xl font-bold mb-1">Fresh Tomatoes</h2>
          <p className="text-white/90 mb-3">10 kg Available</p>
          <p className="text-white/80 mb-5 text-sm leading-6">
            Naturally ripened, juicy and vibrant tomatoes grown with sustainable methods.
            No artificial pesticides or chemicals used.
          </p>

          {/* Map Section */}
          <div
            className="bg-white bg-opacity-60 rounded-md h-24 mb-4 flex items-center justify-center cursor-pointer text-[#2e604a] font-semibold"
            onClick={() =>
              window.open("https://www.google.com/maps", "_blank")
            }
          >
            View Garden Location on Map
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center mb-5">
            <button
              onClick={dec}
              className="bg-white text-[#7EA88F] p-2 rounded-full"
            >
              <FaMinus />
            </button>
            <span className="mx-4 px-3 py-1 bg-white text-[#7EA88F] rounded">
              {qty} gm
            </span>
            <button
              onClick={inc}
              className="bg-white text-[#7EA88F] p-2 rounded-full"
            >
              <FaPlus />
            </button>
          </div>

          {/* Place Order */}
          <button
            onClick={placeOrder}
            className="py-2 px-6 bg-[#2e604a] hover:bg-[#24503e] text-white rounded-lg shadow"
          >
            Place the order
          </button>
        </div>

        {/* Right Panel */}
        <div className="bg-[#DBB78A] flex-1 rounded-2xl shadow-xl p-6 text-center text-[#2e604a]">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
            🍅
          </div>
          <h3 className="font-bold text-xl mb-1">Sunil</h3>
          <p className="text-sm text-[#2e604a]/80 mb-3">4 km away</p>
          <p className="text-[#2e604a]/90 mb-4 text-sm">
            Specializes in growing vegetables using traditional composting methods.
            Known for his vibrant, juicy tomatoes and rich soil management.
          </p>

          {/* Gardener Photos */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[tomato, tomato1, tomato2].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Tomato Field ${index + 1}`}
                className="h-20 w-full object-cover rounded"
              />
            ))}
          </div>

          {/* Contact Buttons */}
          <a
            href="tel:9876543210"
            className="block mb-2 py-2 px-4 bg-[#2e604a] text-white rounded shadow hover:bg-[#1f4535]"
          >
            <FaPhoneAlt className="inline mr-2" />
            Contact Gardener
          </a>
          <a
            href="mailto:sunil@urbanharvest.com"
            className="block py-2 px-4 bg-[#24503e] text-white rounded shadow hover:bg-[#1c3d2e]"
          >
            <FaEnvelope className="inline mr-2" />
            Send Email
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-[#ccc]"></div>

      {/* Review Section */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-xl font-bold mb-4 text-[#2e604a]">
          🍅 Customer Reviews
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2].map((r) => (
            <div key={r} className="bg-[#f9f9f9] p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-800 mb-2">
                “Tomatoes were perfectly ripe and had great flavor! Would definitely reorder.”
              </p>
              <p className="text-xs text-gray-500">– Harsha K., Bengaluru</p>
            </div>
          ))}
        </div>

        {/* Add Review Button */}
        <button
          className="mt-6 py-2 px-4 bg-[#7EA88F] text-white rounded hover:bg-[#6a947c]"
          onClick={() => alert("Redirect to review form")}
        >
          Add Your Review
        </button>
      </div>
    </MainLayout>
  );
}
