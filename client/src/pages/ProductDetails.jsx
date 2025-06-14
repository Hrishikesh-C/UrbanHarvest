// // import React, { useState } from "react";
// // import { useCart } from "../components/CartContext";
// // import { FaPlus, FaMinus, FaPhoneAlt, FaEnvelope, FaStar } from "react-icons/fa";
// // import spinach from "../assets/spinach.jpeg";
// // import spinach1 from "../assets/spinach1.jpeg"; // You can add your own local gardener images
// // import spinach2 from "../assets/spinach2.jpeg";
// // import MainLayout from "../layout/MainLayout";

// // export default function ProductDetails() {
// //   const { addToCart } = useCart();
// //   const [qty, setQty] = useState(100);

// //   const inc = () => setQty((q) => q + 100);
// //   const dec = () => setQty((q) => (q > 100 ? q - 100 : 100));
// //   const placeOrder = () => {
// //     addToCart({ product: "Organic Spinach", price: 120, quantity: qty });
// //     alert("Order placed!");
// //   };

// //   return (
// //     <MainLayout>
// //       <div className="flex flex-col sm:flex-row gap-10">
// //         {/* Left Panel */}
// //         <div className="bg-white flex-1 rounded-2xl shadow-xl p-6 text-center text-black">
// //           <img
// //             src={spinach}
// //             alt="Organic Spinach"
// //             className="w-24 h-24 mb-4 rounded-full mx-auto object-cover"
// //           />
// //           <h2 className="text-2xl font-bold mb-1">Organic Spinach</h2>
// //           <p className="text-black/90 mb-3">2 kg Available</p>
// //           <p className="text-black/80 mb-5 text-sm leading-6">
// //             Freshly grown organic spinach with rich nutrients and zero chemicals.
// //             Cultivated using natural compost and rainwater irrigation.
// //           </p>

// //           {/* Map Section */}
// //           <div
// //             className="bg-[#2e604a] bg-opacity-60 rounded-md h-24 mb-4 flex items-center justify-center cursor-pointer text-[#2e604a] font-semibold"
// //             onClick={() =>
// //               window.open("https://www.google.com/maps", "_blank")
// //             }
// //           >
// //             View Garden Location on Map
// //           </div>

// //           {/* Quantity Selector */}
// //           <div className="flex items-center justify-center mb-5">
// //             <button
// //               onClick={dec}
// //               className="bg-[#2e604a] text-black p-2 rounded-full"
// //             >
// //               <FaMinus />
// //             </button>
// //             <span className="mx-4 px-3 py-1 bg-[#2e604a] text-black rounded">
// //               {qty} gm
// //             </span>
// //             <button
// //               onClick={inc}
// //               className="bg-[#2e604a] text-black p-2 rounded-full"
// //             >
// //               <FaPlus />
// //             </button>
// //           </div>

// //           {/* Place Order */}
// //           <button
// //             onClick={placeOrder}
// //             className="py-2 px-6 bg-[#2e604a] hover:bg-[#24503e] text-white rounded-lg shadow"
// //           >
// //             Place the order
// //           </button>
// //         </div>

// //         {/* Right Panel */}
// //         <div className="bg-[#DBB78A] flex-1 rounded-2xl shadow-xl p-6 text-center text-[#2e604a]">
// //           <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
            
// //           </div>
// //           <h3 className="font-bold text-xl mb-1">Ravi</h3>
// //           <p className="text-sm text-[#2e604a]/80 mb-3">2.5 km away</p>
// //           <p className="text-[#2e604a]/90 mb-4 text-sm">
// //             Expert in growing leafy greens organically without chemicals.
// //             Specializes in soil balancing and eco-farming.
// //           </p>

// //           {/* Gardener Photos */}
// //           <div className="grid grid-cols-3 gap-2 mb-5">
// //             {[spinach,spinach1,spinach2].map((img, index) => (
// //               <img
// //                 key={index}
// //                 src={img}
// //                 alt={`Gardener ${index + 1}`}
// //                 className="h-20 w-full object-cover rounded"
// //               />
// //             ))}
// //           </div>

// //           {/* Contact Buttons */}
// //           <a
// //             href="tel:9876543210"
// //             className="block mb-2 py-2 px-4 bg-[#2e604a] text-white rounded shadow hover:bg-[#1f4535]"
// //           >
// //             <FaPhoneAlt className="inline mr-2" />
// //             Contact Gardener
// //           </a>
// //           <a
// //             href="mailto:ravi@urbanharvest.com"
// //             className="block py-2 px-4 bg-[#24503e] text-white rounded shadow hover:bg-[#1c3d2e]"
// //           >
// //             <FaEnvelope className="inline mr-2" />
// //             Send Email
// //           </a>
// //         </div>
// //       </div>

// //       {/* Divider */}
// //       <div className="my-8 border-t border-[#ccc]"></div>

// //       {/* Review Section */}
// //       <div className="bg-white rounded-2xl p-6 shadow">
// //         <h3 className="text-xl font-bold mb-4 text-[#2e604a]">
// //           🌿 Customer Reviews
// //         </h3>
// //         <div className="grid sm:grid-cols-2 gap-6">
// //           {[1, 2].map((r) => (
// //             <div key={r} className="bg-[#f9f9f9] p-4 rounded-lg border">
// //               <div className="flex items-center gap-2 mb-2 text-yellow-500">
// //                 {[...Array(5)].map((_, i) => (
// //                   <FaStar key={i} />
// //                 ))}
// //               </div>
// //               <p className="text-sm text-gray-800 mb-2">
// //                 “The spinach was super fresh and clean. You can tell it's grown
// //                 with care.”
// //               </p>
// //               <p className="text-xs text-gray-500">– Ananya M., Mysore</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Add Review Button */}
// //         <button
// //           className="mt-6 py-2 px-4 bg-[#7EA88F] text-white rounded hover:bg-[#6a947c]"
// //           onClick={() => alert("Redirect to review form")}
// //         >
// //           Add Your Review
// //         </button>
// //       </div>
// //     </MainLayout>
// //   );
// // }
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "../components/CartContext";
// import { FaPlus, FaMinus, FaPhoneAlt, FaEnvelope, FaStar } from "react-icons/fa";
// import spinach from "../assets/spinach.jpeg";
// import spinach1 from "../assets/spinach1.jpeg";
// import spinach2 from "../assets/spinach2.jpeg";
// import tomato from "../assets/tomato.jpg";
// import tomato1 from "../assets/tomato1.jpg";
// import tomato2 from "../assets/tomato2.jpg";
// import MainLayout from "../layout/MainLayout";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const [qty, setQty] = useState(100); // quantity in grams

//   const products = {
//     "1": {
//       name: "Organic Spinach",
//       available: "2 kg Available",
//       price: 120,
//       gardener: "Ravi",
//       distance: "2.5 km away",
//       description: "Freshly grown organic spinach with rich nutrients and zero chemicals. Cultivated using natural compost and rainwater irrigation.",
//       contact: {
//         phone: "9876543210",
//         email: "ravi@urbanharvest.com",
//       },
//       images: [spinach, spinach1, spinach2],
//       emoji: "🥬",
//       review: "The spinach was super fresh and clean. You can tell it's grown with care.",
//       reviewer: "– Ananya M., Mysore"
//     },
//     "2": {
//       name: "Fresh Tomatoes",
//       available: "10 kg Available",
//       price: 100,
//       gardener: "Sunil",
//       distance: "4 km away",
//       description: "Naturally ripened, juicy and vibrant tomatoes grown with sustainable methods. No artificial pesticides or chemicals used.",
//       contact: {
//         phone: "9876543210",
//         email: "sunil@urbanharvest.com",
//       },
//       images: [tomato, tomato1, tomato2],
//       emoji: "🍅",
//       review: "Tomatoes were perfectly ripe and had great flavor! Would definitely reorder.",
//       reviewer: "– Harsha K., Bengaluru"
//     }
//   };

//   const product = products[id];

//   if (!product) {
//     return (
//       <MainLayout>
//         <div className="text-center py-20 text-red-600 text-xl">
//           Product not found.
//         </div>
//       </MainLayout>
//     );
//   }

//   const inc = () => setQty((q) => q + 100);
//   const dec = () => setQty((q) => (q > 100 ? q - 100 : 100));
//   const placeOrder = () => {
//     addToCart({ product: product.name, price: product.price, quantity: qty });
//     alert("Order placed!");
//   };

//   return (
//     <MainLayout>
//       <div className="flex flex-col sm:flex-row gap-10">
//         {/* Left Panel */}
//         <div className="bg-white flex-1 rounded-2xl shadow-xl p-6 text-center text-black">
//           <img
//             src={product.images[0]}
//             alt={product.name}
//             className="w-24 h-24 mb-4 rounded-full mx-auto object-cover"
//           />
//           <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
//           <p className="text-black/90 mb-3">{product.available}</p>
//           <p className="text-black/80 mb-5 text-sm leading-6">{product.description}</p>

//           {/* Map Section */}
//           <div
//             className="bg-[#2e604a] bg-opacity-60 rounded-md h-24 mb-4 flex items-center justify-center cursor-pointer text-[#2e604a] font-semibold"
//             onClick={() => window.open("https://www.google.com/maps", "_blank")}
//           >
//             View Garden Location on Map
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center justify-center mb-5">
//             <button onClick={dec} className="bg-[#2e604a] text-black p-2 rounded-full">
//               <FaMinus />
//             </button>
//             <span className="mx-4 px-3 py-1 bg-[#2e604a] text-black rounded">{qty} gm</span>
//             <button onClick={inc} className="bg-[#2e604a] text-black p-2 rounded-full">
//               <FaPlus />
//             </button>
//           </div>

//           {/* Place Order */}
//           <button
//             onClick={placeOrder}
//             className="py-2 px-6 bg-[#2e604a] hover:bg-[#24503e] text-white rounded-lg shadow"
//           >
//             Place the order
//           </button>
//         </div>

//         {/* Right Panel */}
//         <div className="bg-[#DBB78A] flex-1 rounded-2xl shadow-xl p-6 text-center text-[#2e604a]">
//           <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
//             {product.emoji}
//           </div>
//           <h3 className="font-bold text-xl mb-1">{product.gardener}</h3>
//           <p className="text-sm text-[#2e604a]/80 mb-3">{product.distance}</p>
//           <p className="text-[#2e604a]/90 mb-4 text-sm">{product.description}</p>

//           {/* Gardener Photos */}
//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {product.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Gardener ${index + 1}`}
//                 className="h-20 w-full object-cover rounded"
//               />
//             ))}
//           </div>

//           {/* Contact Buttons */}
//           <a
//             href={`tel:${product.contact.phone}`}
//             className="block mb-2 py-2 px-4 bg-[#2e604a] text-white rounded shadow hover:bg-[#1f4535]"
//           >
//             <FaPhoneAlt className="inline mr-2" />
//             Contact Gardener
//           </a>
//           <a
//             href={`mailto:${product.contact.email}`}
//             className="block py-2 px-4 bg-[#24503e] text-white rounded shadow hover:bg-[#1c3d2e]"
//           >
//             <FaEnvelope className="inline mr-2" />
//             Send Email
//           </a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="my-8 border-t border-[#ccc]"></div>

//       {/* Review Section */}
//       <div className="bg-white rounded-2xl p-6 shadow">
//         <h3 className="text-xl font-bold mb-4 text-[#2e604a]">
//           {product.emoji} Customer Reviews
//         </h3>
//         <div className="grid sm:grid-cols-2 gap-6">
//           {[1, 2].map((r) => (
//             <div key={r} className="bg-[#f9f9f9] p-4 rounded-lg border">
//               <div className="flex items-center gap-2 mb-2 text-yellow-500">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-800 mb-2">“{product.review}”</p>
//               <p className="text-xs text-gray-500">{product.reviewer}</p>
//             </div>
//           ))}
//         </div>

//         {/* Add Review Button */}
//         <button
//           className="mt-6 py-2 px-4 bg-[#7EA88F] text-white rounded hover:bg-[#6a947c]"
//           onClick={() => alert("Redirect to review form")}
//         >
//           Add Your Review
//         </button>
//       </div>
//     </MainLayout>
//   );
// }
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { FaPlus, FaMinus, FaPhoneAlt, FaEnvelope, FaStar } from "react-icons/fa";
import spinach from "../assets/spinach.jpeg";
import spinach1 from "../assets/spinach1.jpeg";
import spinach2 from "../assets/spinach2.jpeg";
import tomato from "../assets/tomoto.jpeg";
import tomato1 from "../assets/tomato1.jpeg";
import tomato2 from "../assets/tomato2.jpeg";
import MainLayout from "../layout/MainLayout";

export default function ProductDetails() {
  const { id = "1" } = useParams(); // default to spinach if no id provided
  const { addToCart } = useCart();
  const [qty, setQty] = useState(100); // quantity in grams

  const products = {
    "1": {
      name: "Organic Spinach",
      available: "2 kg Available",
      price: 120,
      gardener: "Ravi",
      distance: "2.5 km away",
      description: "Freshly grown organic spinach with rich nutrients and zero chemicals. Cultivated using natural compost and rainwater irrigation.",
      contact: {
        phone: "9876543210",
        email: "ravi@urbanharvest.com",
      },
      images: [spinach, spinach1, spinach2],
      emoji: "🥬",
      review: "The spinach was super fresh and clean. You can tell it's grown with care.",
      reviewer: "– Ananya M., Mysore"
    },
    "2": {
      name: "Fresh Tomatoes",
      available: "10 kg Available",
      price: 100,
      gardener: "Sunil",
      distance: "4 km away",
      description: "Naturally ripened, juicy and vibrant tomatoes grown with sustainable methods. No artificial pesticides or chemicals used.",
      contact: {
        phone: "9876543210",
        email: "sunil@urbanharvest.com",
      },
      images: [tomato, tomato1, tomato2],
      emoji: "🍅",
      review: "Tomatoes were perfectly ripe and had great flavor! Would definitely reorder.",
      reviewer: "– Harsha K., Bengaluru"
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <MainLayout>
        <div className="text-center py-20 text-red-600 text-xl">
          Product not found.
        </div>
      </MainLayout>
    );
  }

  const inc = () => setQty((q) => q + 100);
  const dec = () => setQty((q) => (q > 100 ? q - 100 : 100));

 const placeOrder = () => {
  addToCart({
    product: product.name,
    price: product.price,
    quantity: qty,
    image: product.images[0], // ✅ Include image
  });
  alert("Order placed!");
};

  return (
    <MainLayout>
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Left Panel */}
        <section className="bg-white flex-1 rounded-2xl shadow-xl p-6 text-center text-black">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-24 h-24 mb-4 rounded-full mx-auto object-cover"
          />
          <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
          <p className="text-black/90 mb-3">{product.available}</p>
          <p className="text-black/80 mb-5 text-sm leading-6">{product.description}</p>

          <div
            className="bg-[#2e604a] bg-opacity-60 rounded-md h-24 mb-4 flex items-center justify-center cursor-pointer text-[#2e604a] font-semibold"
            onClick={() => window.open("https://www.google.com/maps", "_blank")}
          >
            View Garden Location on Map
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center mb-5">
            <button
              onClick={dec}
              className="bg-[#2e604a] text-black p-2 rounded-full"
              aria-label="Decrease quantity"
            >
              <FaMinus />
            </button>
            <span className="mx-4 px-3 py-1 bg-[#2e604a] text-black rounded">{qty} gm</span>
            <button
              onClick={inc}
              className="bg-[#2e604a] text-black p-2 rounded-full"
              aria-label="Increase quantity"
            >
              <FaPlus />
            </button>
          </div>

          <button
            onClick={placeOrder}
            className="py-2 px-6 bg-[#2e604a] hover:bg-[#24503e] text-white rounded-lg shadow"
          >
            Place the order
          </button>
        </section>

        {/* Right Panel */}
        <section className="bg-[#DBB78A] flex-1 rounded-2xl shadow-xl p-6 text-center text-[#2e604a]">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
            {product.emoji || "🌿"}
          </div>
          <h3 className="font-bold text-xl mb-1">{product.gardener}</h3>
          <p className="text-sm text-[#2e604a]/80 mb-3">{product.distance}</p>
          <p className="text-[#2e604a]/90 mb-4 text-sm">{product.description}</p>

          <div className="grid grid-cols-3 gap-2 mb-5">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product view ${index + 1}`}
                className="h-20 w-full object-cover rounded"
              />
            ))}
          </div>

          <a
            href={`tel:${product.contact.phone}`}
            className="block mb-2 py-2 px-4 bg-[#2e604a] text-white rounded shadow hover:bg-[#1f4535]"
          >
            <FaPhoneAlt className="inline mr-2" />
            Contact Gardener
          </a>
          <a
            href={`mailto:${product.contact.email}`}
            className="block py-2 px-4 bg-[#24503e] text-white rounded shadow hover:bg-[#1c3d2e]"
          >
            <FaEnvelope className="inline mr-2" />
            Send Email
          </a>
        </section>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-[#ccc]" />

      {/* Review Section */}
      <section className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-xl font-bold mb-4 text-[#2e604a]">
          {product.emoji} Customer Reviews
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2].map((r) => (
            <div key={r} className="bg-[#f9f9f9] p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-800 mb-2">“{product.review}”</p>
              <p className="text-xs text-gray-500">{product.reviewer}</p>
            </div>
          ))}
        </div>

        <button
          className="mt-6 py-2 px-4 bg-[#7EA88F] text-white rounded hover:bg-[#6a947c]"
          onClick={() => alert("Redirect to review form")}
        >
          Add Your Review
        </button>
      </section>
    </MainLayout>
  );
}
