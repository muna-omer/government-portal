// export default function  Sidebar() {
//   return (
//     <div className="w-[280px] h-screen bg-gray-100 flex flex-col border-r border-gray-200">
//      <div className="px-6 py-5 border-b">
//         <h1 className="text-lg font-semibold text-gray-900">🛒 Manka</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-3 py-4">
//         <ul className="flex flex-col gap-1 text-sm">

//           {/* Active Item */}
//           <li className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer
//                          border border-blue-400 bg-blue-50 text-blue-600 font-medium">
//             📊 Dashboard
//           </li>

//           {/* Menu Items */}
//           {[
//             "🗂️ Categories",
//              "📦 Products",
//              "🚚 Suppliers",
//             // "🧾 Purchases",
//             "💰 Sales",
//             "💸 Expenses",
//             "📑 Reports",
//             "⚙️ Settings",
//           ].map((item) => (
//             <li
//               key={item}
//               className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer
//                          text-gray-600 border border-transparent
//                          hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600
//                          transition-all duration-200"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </nav>

//     </div>
//   );
// }





























import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${
       isActive
         ? "bg-blue-100 text-blue-600 font-semibold"
         : "text-gray-600 hover:bg-gray-100"
     }`;

  return (
    <aside className="w-[260px] bg-white border-r p-4">
      <h1 className="text-xl font-bold mb-6">🛒 Manka</h1>

      <nav className="flex flex-col gap-1">
        <NavLink to="/" className={linkClass}>📊 Dashboard</NavLink>
        <NavLink to="/categories" className={linkClass}>🗂 Categories</NavLink>
        <NavLink to="/products" className={linkClass}>📦 Products</NavLink>
        <NavLink to="/suppliers" className={linkClass}>🚚 Suppliers</NavLink>
        <NavLink to="/purchases" className={linkClass}>🛒 Purchases</NavLink>
        <NavLink to="/sales" className={linkClass}>💰 Sales</NavLink>
        <NavLink to="/expenses" className={linkClass}>📉 Expenses</NavLink>
        <NavLink to="/reports" className={linkClass}>📄 Reports</NavLink>
        <NavLink to="/settings" className={linkClass}>⚙️ Settings</NavLink>
      </nav>
    </aside>
  );
}
