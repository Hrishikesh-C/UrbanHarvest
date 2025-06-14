// src/pages/OrdersReceived.jsx
import React, { useState } from "react";
import SellerLayout from "../layout/SellerLayout";

const dummyOrders = [
  {
    id: "ORD001",
    buyer: "Alice Smith",
    items: "Spinach, Tomatoes",
    total: 320,
    date: "2025-06-08",
    status: "Pending",
  },
  {
    id: "ORD002",
    buyer: "Bob Johnson",
    items: "Lettuce",
    total: 110,
    date: "2025-06-07",
    status: "Completed",
  },
  {
    id: "ORD003",
    buyer: "Clara Wilson",
    items: "Bell Peppers",
    total: 150,
    date: "2025-06-07",
    status: "Pending",
  },
];

export default function OrdersReceived() {
  const [orders, setOrders] = useState(dummyOrders);
  const [search, setSearch] = useState("");

  const handleStatusChange = (id, newStatus) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.buyer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SellerLayout>
      <div className="p-6 bg-[#f9fefb] min-h-screen">
        <h1 className="text-3xl font-bold text-[#2e604a] mb-6">Orders Received</h1>

        {/* Search */}
        <div className="mb-4 flex justify-between flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search by Order ID or Buyer"
            className="border border-gray-300 px-4 py-2 rounded w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-[#2e604a] border-b bg-[#f2fdf6]">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Buyer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium">{order.id}</td>
                  <td className="px-6 py-3">{order.buyer}</td>
                  <td className="px-6 py-3">{order.items}</td>
                  <td className="px-6 py-3">₹{order.total}</td>
                  <td className="px-6 py-3">{order.date}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Canceled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="border border-gray-300 rounded px-3 py-1 text-sm text-[#2e604a] bg-white focus:outline-none"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-6 text-center text-gray-400">
                    No matching orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </SellerLayout>
  );
}
