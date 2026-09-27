// const Sidebar = () => {
//   return (
//     <aside style={{padding:12}}>
//       <div>Sidebar (minimal)</div>
//     </aside>
//   )
// }

// export default Sidebar;

// export default function Sidebar() {
//   return (
//     <aside className="w-[280px] border-r-2 border-gray-300 h-screen p-5 bg-white flex flex-col">
//   {/* Logo / Title */}
//   <div className="px-6 py-5">
//     <h1 className="text-xl font-semibold text-gray-900">🛒 Manka</h1>
//   </div>

//   {/* Navigation */}
//   <nav className="flex-1 px-1">
//     <ul className="list-none flex flex-col">
//       <li className="mb-4 px-2 py-1 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         📊 Dashboard
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         🗂️ Categories
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         🚚 Suppliers
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         🧾 Purchases
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         💰 Sales
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         💸 Expenses
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         📑 Reports
//       </li>
//       <li className="mb-4 px-3 py-2 rounded-md text-gray-600 cursor-pointer flex items-center gap-2 transition-all duration-200
//                      hover:border hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//         ⚙️ Settings
//       </li>
//     </ul>
//   </nav>
// </aside>

//   );
// }












export default function Sidebar() {
  return (
    <div className="flex h-screen">
    <aside className="w-[280px] h-screen bg-red-500 border-r border-gray-200 flex flex-col">
      
    
      <div className="px-6 py-5 border-b">
        <h1 className="text-lg font-semibold text-gray-900">🛒 Manka</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="flex flex-col gap-1 text-sm">

          {/* Active Item */}
          <li className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer
                         border border-blue-400 bg-blue-50 text-blue-600 font-medium">
            📊 Dashboard
          </li>

          {/* Menu Items */}
          {[
            "🗂️ Categories",
            "🚚 Suppliers",
            "🧾 Purchases",
            "💰 Sales",
            "💸 Expenses",
            "📑 Reports",
            "⚙️ Settings",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer
                         text-gray-600 border border-transparent
                         hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600
                         transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

    </aside>
    </div>
  );
}

