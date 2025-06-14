import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaBox,
  FaShoppingCart,
  FaUserCog,
  FaBars,
  FaSignOutAlt,
  FaBookOpen // <-- Added icon for Seller Guide
} from "react-icons/fa";

export default function SellerSidebar({ collapsed, toggleCollapse }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItemClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
      location.pathname === path
        ? "bg-[#DBB78A] text-[#2e604a] font-semibold"
        : "text-white hover:bg-[#3d7b62]"
    }`;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      className={`bg-[#2e604a] text-white fixed top-0 left-0 h-full shadow-lg transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } z-40 flex flex-col justify-between`}
    >
      <div>
        {/* Logo / Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b border-[#3d7b62]">
          {!collapsed && (
            <h2 className="text-xl font-bold">
              Urban <span className="text-[#DBB78A]">Harvest</span>
            </h2>
          )}
          <button onClick={toggleCollapse} className="text-white text-xl">
            <FaBars />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 mt-6 px-2">
          <Link to="/seller/dashboard" className={navItemClass("/seller/dashboard")}>
            <FaLeaf /> {!collapsed && "Dashboard"}
          </Link>

          <Link to="/seller/products" className={navItemClass("/seller/products")}>
            <FaBox /> {!collapsed && "Manage Products"}
          </Link>

          <Link to="/seller/orders" className={navItemClass("/seller/orders")}>
            <FaShoppingCart /> {!collapsed && "Orders Received"}
          </Link>

          {/* ✅ New Seller Guide Link */}
          <Link to="/seller/guide" className={navItemClass("/seller/guide")}>
            <FaBookOpen /> {!collapsed && "Seller Guide"}
          </Link>

          <Link to="/seller/profile" className={navItemClass("/seller/profile")}>
            <FaUserCog /> {!collapsed && "Account Settings"}
          </Link>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="mb-6 px-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-red-600 transition"
        >
          <FaSignOutAlt /> {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
}
