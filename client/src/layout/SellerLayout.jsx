// src/layout/SellerLayout.jsx
import React, { useState } from "react";
import SellerSidebar from "../components/SellerSidebar";

export default function SellerLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f9fefb] font-sans">
      {/* Sidebar */}
      <SellerSidebar collapsed={collapsed} toggleCollapse={() => setCollapsed(!collapsed)} />

      {/* Main Content */}
      <main
        className={`transition-all duration-300 flex-1 px-6 py-8 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <div className="bg-white shadow-md rounded-lg p-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
