import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)} // ✅ Correct route
      className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
    >
      <img
        src={product.images?.[0] || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={product.product}
        className="h-40 w-full object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-bold text-[#2e604a]">{product.product}</h2>
      <p className="text-sm text-gray-600 mb-2">Available: {product.quantity}</p>
      <div className="text-[#2e604a] font-bold text-md">₹{product.price}</div>
    </div>
  );
}

// // src/components/ProductCard.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { FaPhoneAlt, FaEnvelope, FaStar, FaPlus, FaMinus } from "react-icons/fa";
// import { useCart } from "../components/CartContext";
// import MainLayout from "../layout/MainLayout";
// import spinach1 from "../assets/spinach1.jpeg";

// // Sample product data
// const productList = [
//   {
//     id: "1",
//     name: "Organic Spinach",
//     description: "Freshly grown organic spinach...",
//     quantity: "2 kg",
//     availableQty: 2000,
//     price: 120,
//     gardener: "Ravi",
//     distance: "2.5 km",
//     contact: {
//       phone: "9876543210",
//       email: "ravi@urbanharvest.com"
//     },
//     images: [spinach1, spinach1, spinach1]
//   },
//   {
//     id: "2",
//     name: "Fresh Tomatoes",
//     description: "Juicy and ripe tomatoes grown in organic compost.",
//     quantity: "10 kg",
//     availableQty: 10000,
//     price: 100,
//     gardener: "Meena",
//     distance: "1.8 km",
//     contact: {
//       phone: "9876543222",
//       email: "meena@urbanharvest.com"
//     },
//     images: [
//       "https://media.istockphoto.com/id/1299586597/photo/indeterminate-tomato-plants-growing-outside-in-uk.jpg"
//     ]
//   },
//   // Add more as needed
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate(); // <== ✅ added
//   const { addToCart } = useCart();
//   const product = productList.find((p) => p.id === id);
//   const [qty, setQty] = React.useState(100);

//   const inc = () => setQty((q) => q + 100);
//   const dec = () => setQty((q) => (q > 100 ? q - 100 : 100));

//   const placeOrder = () => {
//     addToCart({ product: product.name, price: product.price, quantity: qty });
//     alert("Order placed!");
//     navigate("/cart"); // <== ✅ navigates to cart
//   };

//   if (!product) {
//     return <MainLayout><div className="p-8 text-red-500">Product not found.</div></MainLayout>;
//   }
//   return (
//     <MainLayout>
//       <div className="flex flex-col sm:flex-row gap-10">
//         {/* Left Panel */}
//         <div className="bg-[#7EA88F] flex-1 rounded-2xl shadow-xl p-6 text-center text-white">
//           <img
//             src={product.images[0]}
//             alt={product.name}
//             className="w-24 h-24 mb-4 rounded-full mx-auto object-cover"
//           />
//           <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
//           <p className="text-white/90 mb-3">{product.quantity} Available</p>
//           <p className="text-white/80 mb-5 text-sm leading-6">{product.description}</p>

//           <div
//             className="bg-white bg-opacity-60 rounded-md h-24 mb-4 flex items-center justify-center cursor-pointer text-[#2e604a] font-semibold"
//             onClick={() => window.open("https://www.google.com/maps", "_blank")}
//           >
//             View Garden Location on Map
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center justify-center mb-5">
//             <button onClick={dec} className="bg-white text-[#7EA88F] p-2 rounded-full">
//               <FaMinus />
//             </button>
//             <span className="mx-4 px-3 py-1 bg-white text-[#7EA88F] rounded">{qty} gm</span>
//             <button onClick={inc} className="bg-white text-[#7EA88F] p-2 rounded-full">
//               <FaPlus />
//             </button>
//           </div>

//           <button
//             onClick={placeOrder}
//             className="py-2 px-6 bg-[#2e604a] hover:bg-[#24503e] text-white rounded-lg shadow"
//           >
//             Place the order
//           </button>
//         </div>

//         {/* Right Panel */}
//         <div className="bg-[#DBB78A] flex-1 rounded-2xl shadow-xl p-6 text-center text-[#2e604a]">
//           <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl"></div>
//           <h3 className="font-bold text-xl mb-1">{product.gardener}</h3>
//           <p className="text-sm text-[#2e604a]/80 mb-3">{product.distance} away</p>
//           <p className="text-[#2e604a]/90 mb-4 text-sm">
//             Passionate about sustainable farming and organic produce.
//           </p>

//           {/* Gardener Photos */}
//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {product.images.map((img, index) => (
//               <img key={index} src={img} alt={`Gardener ${index + 1}`} className="h-20 w-full object-cover rounded" />
//             ))}
//           </div>

//           {/* Contact Buttons */}
//           <a href={`tel:${product.contact.phone}`} className="block mb-2 py-2 px-4 bg-[#2e604a] text-white rounded shadow hover:bg-[#1f4535]">
//             <FaPhoneAlt className="inline mr-2" />
//             Contact Gardener
//           </a>
//           <a href={`mailto:${product.contact.email}`} className="block py-2 px-4 bg-[#24503e] text-white rounded shadow hover:bg-[#1c3d2e]">
//             <FaEnvelope className="inline mr-2" />
//             Send Email
//           </a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="my-8 border-t border-[#ccc]"></div>

//       {/* Review Section */}
//       <div className="bg-white rounded-2xl p-6 shadow">
//         <h3 className="text-xl font-bold mb-4 text-[#2e604a]">🌿 Customer Reviews</h3>
//         <div className="grid sm:grid-cols-2 gap-6">
//           {[1, 2].map((r) => (
//             <div key={r} className="bg-[#f9f9f9] p-4 rounded-lg border">
//               <div className="flex items-center gap-2 mb-2 text-yellow-500">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-800 mb-2">
//                 “The {product.name.toLowerCase()} was super fresh. You can tell it's grown with care.”
//               </p>
//               <p className="text-xs text-gray-500">– Ananya M., Mysore</p>
//             </div>
//           ))}
//         </div>

//         <button className="mt-6 py-2 px-4 bg-[#7EA88F] text-white rounded hover:bg-[#6a947c]" onClick={() => alert("Redirect to review form")}>
//           Add Your Review
//         </button>
//       </div>
//     </MainLayout>
//   );
// }
