// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import SellerLayout from "../layout/SellerLayout";
// import { FaPlus, FaClipboardList, FaHistory, FaStar } from "react-icons/fa";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function SellerDashboard() {
//   const data = {
//     labels: ["Spinach", "Tomatoes", "Lettuce", "Peppers", "Broccoli"],
//     datasets: [
//       {
//         label: "Stock (kg)",
//         data: [5, 10, 7, 6, 3],
//         backgroundColor: "#527a6e",
//         borderRadius: 6,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "#2e604a",
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         ticks: { color: "#3d3d3d" },
//       },
//       y: {
//         ticks: { color: "#3d3d3d" },
//       },
//     },
//   };

//   const inventory = [
//     { id: "INV101", product: "Organic Spinach", stock: "5 kg", status: "Active" },
//     { id: "INV102", product: "Tomatoes", stock: "10 kg", status: "Active" },
//     { id: "INV103", product: "Lettuce", stock: "7 kg", status: "Inactive" },
//     { id: "INV104", product: "Bell Peppers", stock: "6 kg", status: "Active" },
//     { id: "INV105", product: "Broccoli", stock: "3 kg", status: "Low" },
//   ];

//   const features = [
//     { icon: <FaPlus />, label: "Add New Product", bg: "#e8f5e9" },
//     { icon: <FaClipboardList />, label: "Order Management", bg: "#f9f0e6" },
//     { icon: <FaHistory />, label: "Sales History", bg: "#e6f1fa" },
//     { icon: <FaStar />, label: "Feedback & Ratings", bg: "#f8f2f9" },
//   ];

//   return (
//     <SellerLayout>
//       <div className="text-[#2e604a]">
//         <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>

//         {/* Inventory and Chart */}
//         <div className="grid md:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
//             <table className="w-full text-left text-sm text-gray-700">
//               <thead>
//                 <tr className="text-[#527a6e]">
//                   <th className="pb-2">ID</th>
//                   <th className="pb-2">Product</th>
//                   <th className="pb-2">Stock</th>
//                   <th className="pb-2">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {inventory.map((item) => (
//                   <tr key={item.id} className="border-t border-gray-200">
//                     <td className="py-2">{item.id}</td>
//                     <td className="py-2">{item.product}</td>
//                     <td className="py-2">{item.stock}</td>
//                     <td className={`py-2 font-medium ${
//                       item.status === "Active"
//                         ? "text-green-600"
//                         : item.status === "Low"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                     }`}>
//                       {item.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Stock Overview (Bar Chart)</h2>
//             <div className="h-[200px]">
//               <Bar data={data} options={options} />
//             </div>
//           </div>
//         </div>

//         {/* Upcoming Features */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-xl font-semibold mb-6">Upcoming Features</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center bg-opacity-60 rounded-lg p-4 shadow-sm"
//                 style={{ backgroundColor: feature.bg }}
//               >
//                 <div className="text-2xl mb-2 text-[#2e604a]">{feature.icon}</div>
//                 <p className="text-sm font-medium text-[#3b4d3d]">{feature.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </SellerLayout>
//   );
// }
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import SellerLayout from "../layout/SellerLayout";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SellerDashboard() {
  const data = {
    labels: ["Spinach", "Tomatoes", "Lettuce", "Peppers", "Broccoli"],
    datasets: [
      {
        label: "Stock (kg)",
        data: [5, 10, 7, 6, 3],
        backgroundColor: "#527a6e",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#2e604a",
          font: { size: 14 },
        },
      },
    },
    scales: {
      x: { ticks: { color: "#3d3d3d" } },
      y: { ticks: { color: "#3d3d3d" } },
    },
  };

  const inventory = [
    { id: "INV101", product: "Organic Spinach", stock: "5 kg", status: "Active" },
    { id: "INV102", product: "Tomatoes", stock: "10 kg", status: "Active" },
    { id: "INV103", product: "Lettuce", stock: "7 kg", status: "Inactive" },
    { id: "INV104", product: "Bell Peppers", stock: "6 kg", status: "Active" },
    { id: "INV105", product: "Broccoli", stock: "3 kg", status: "Low" },
  ];

  return (
    <SellerLayout>
      <div className="min-h-screen bg-[#f3f9f6] p-8 font-sans">
        <h1 className="text-3xl font-bold text-[#3b4d3d] mb-6">Seller Dashboard</h1>

        {/* Inventory & Chart */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#2e604a] mb-4">Current Inventory</h2>
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="text-[#527a6e]">
                  <th className="pb-2">ID</th>
                  <th className="pb-2">Product</th>
                  <th className="pb-2">Stock</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="py-2">{item.id}</td>
                    <td className="py-2">{item.product}</td>
                    <td className="py-2">{item.stock}</td>
                    <td
                      className={`py-2 font-medium ${
                        item.status === "Active"
                          ? "text-green-600"
                          : item.status === "Low"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#2e604a] mb-4">Stock Overview (Bar Chart)</h2>
            <div className="h-[220px]">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-[#2e604a] mb-4">Recent Reviews</h2>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="border-b pb-3">
              <strong className="text-[#3b4d3d]">Riya Sharma:</strong> The spinach was super fresh and tasty!
            </li>
            <li className="border-b pb-3">
              <strong className="text-[#3b4d3d]">Amit Verma:</strong> Delivery was smooth. Great quality peppers.
            </li>
            <li>
              <strong className="text-[#3b4d3d]">Neha Mehta:</strong> Broccoli could be fresher, but overall good service.
            </li>
          </ul>
        </div>

        {/* Sales History */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-[#2e604a] mb-4">Sales History</h2>
          <table className="w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="text-[#527a6e]">
                <th className="pb-2">Date</th>
                <th className="pb-2">Product</th>
                <th className="pb-2">Quantity</th>
                <th className="pb-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-2">2025-06-08</td>
                <td className="py-2">Spinach</td>
                <td className="py-2">2 kg</td>
                <td className="py-2">₹120</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2">2025-06-07</td>
                <td className="py-2">Lettuce</td>
                <td className="py-2">1.5 kg</td>
                <td className="py-2">₹90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SellerLayout>
  );
}
