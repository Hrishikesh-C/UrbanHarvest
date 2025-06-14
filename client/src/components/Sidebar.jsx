// // Sidebar.jsx
// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   FaTachometerAlt,
//   FaLeaf,
//   FaBook,
//   FaShoppingCart,
//   FaUser,
//   FaHistory,
//   FaSignOutAlt,
//   FaBars,
// } from "react-icons/fa";

// const navItems = [
//   { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
//   { name: "Availability", icon: <FaLeaf />, path: "/availability" },
//   { name: "Cart", icon: <FaShoppingCart />, path: "/cart" },
//   { name: "Orders", icon: <FaUser />, path: "/orders" },
//   // { name: "Guides", icon: <FaBook />, path: "/guides" },
// ];

// export function Sidebar({ collapsed, toggleCollapse }) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogout = () => navigate("/");

//   return (
//     <aside
//       className={`h-screen ${
//         collapsed ? "w-20" : "w-64"
//       } bg-[#fdf8f2] shadow-xl p-4 font-sans fixed top-0 left-0 flex flex-col justify-between transition-all duration-300`}
//     >
//       <div>
//         <div className="flex justify-between items-center mb-8">
//           {!collapsed && (
//             <h1 className="text-xl font-bold text-[#2e604a]">
//               Urban <span className="text-[#2e604a]">Harvest</span>
//             </h1>
//           )}
//           <button
//             onClick={toggleCollapse}
//             className="text-[#2e604a] focus:outline-none text-xl"
//           >
//             <FaBars />
//           </button>
//         </div>

//         <ul className="space-y-4">
//           {navItems.map(({ name, icon, path }) => {
//             const isActive = location.pathname === path;
//             return (
//               <li key={name}>
//                 <Link
//                   to={path}
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
//                     isActive
//                       ? "bg-[#e6f0eb] text-[#2e604a]"
//                       : "text-gray-700 hover:bg-[#eaeae8]"
//                   }`}
//                 >
//                   <span className="text-lg">{icon}</span>
//                   {!collapsed && name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <button
//         onClick={handleLogout}
//         className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 transition ${
//           collapsed ? "justify-center" : "self-start"
//         }`}
//       >
//         <FaSignOutAlt className="text-lg" />
//         {!collapsed && "Logout"}
//       </button>
//     </aside>
//   );
// }
// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaLeaf,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

export default function Sidebar({ collapsed, toggleCollapse }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Availability", icon: <FaLeaf />, path: "/availability" },
    { name: "Cart", icon: <FaShoppingCart />, path: "/cart" },
    { name: "Orders", icon: <FaUser />, path: "/orders" },
  ];

  const navItemClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
      location.pathname === path
        ? "bg-[#DBB78A] text-[#2e604a] font-semibold"
        : "text-white hover:bg-[#3d7b62]"
    }`;

  const handleLogout = () => {
    // Optional: clear auth tokens
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
          {navItems.map(({ name, icon, path }) => (
            <Link to={path} key={name} className={navItemClass(path)}>
              {icon} {!collapsed && name}
            </Link>
          ))}
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
