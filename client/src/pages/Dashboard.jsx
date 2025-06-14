// src/pages/BuyerDashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaShoppingCart,
} from "react-icons/fa";
import MainLayout from "../layout/MainLayout";

const ordersData = [
  { id: "ORD1234", product: "Fresh Spinach", date: "2025-06-01", status: "Delivered" },
  { id: "ORD1235", product: "Organic Tomatoes", date: "2025-06-03", status: "Pending" },
  { id: "ORD1236", product: "Herbs Mix Pack", date: "2025-06-05", status: "Cancelled" },
  { id: "ORD1237", product: "Lettuce", date: "2025-06-07", status: "Delivered" },
];

const statusColors = {
  Delivered: "text-green-600",
  Pending: "text-yellow-600",
  Cancelled: "text-red-600",
};

export default function BuyerDashboard() {
  const totalOrders = ordersData.length;
  const delivered = ordersData.filter((o) => o.status === "Delivered").length;
  const pending = ordersData.filter((o) => o.status === "Pending").length;
  const cancelled = ordersData.filter((o) => o.status === "Cancelled").length;

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-gray-900">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-[#2e604a] mb-1">
              Welcome Back, <span className="underline">Buyer</span>!
            </h1>
            <p className="text-gray-200">
              Track your order history and current order status here.
            </p>
          </header>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-10">
            <StatCard icon={<FaShoppingCart />} label="Total Orders" value={totalOrders} />
            <StatCard icon={<FaClock className="text-yellow-600" />} label="Pending" value={pending} />
            <StatCard icon={<FaCheckCircle className="text-green-600" />} label="Delivered" value={delivered} />
            <StatCard icon={<FaTimesCircle className="text-red-600" />} label="Cancelled" value={cancelled} />
          </section>

          {/* Orders Table */}
          <section className="bg-[#fdf8f2] rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#2e604a]">Recent Orders</h2>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map(({ id, product, date, status }) => (
                  <tr key={id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-4 font-mono text-sm">{id}</td>
                    <td className="py-3 px-4">{product}</td>
                    <td className="py-3 px-4">{date}</td>
                    <td className={`py-3 px-4 font-semibold ${statusColors[status]}`}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </motion.div>
    </MainLayout>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-[#fdf8f2] p-6 rounded-xl shadow-lg flex items-center gap-4">
      <div className="text-[#2e604a] text-3xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
