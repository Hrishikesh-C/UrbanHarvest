// src/layout/MainLayout.jsx
import React, { useState } from "react";
import  Sidebar  from "../components/Sidebar";

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#7ba696]">
      <Sidebar collapsed={collapsed} toggleCollapse={() => setCollapsed(!collapsed)} />
      <main
        className={`transition-all duration-300 flex-1 p-6 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
