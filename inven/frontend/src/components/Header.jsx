import { FiSearch, FiBell } from "react-icons/fi";

export default function Header() {
  const username = "Muna Omar";
  const role = "Admin";

  // Get first letter of username
  const initial = username.charAt(0).toUpperCase();

  return (
    <header className="h-20 bg-white border-b px-6 flex items-center justify-between">
      
      {/* LEFT: Search */}
      <div className="flex items-center gap-3 w-[320px] bg-gray-200 border-gray-200  border px-4 py-2 rounded-md">
        <FiSearch className="text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-sm outline-none"
        />
      </div>

      {/* RIGHT: Notification + User */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <div className="relative cursor-pointer">
          <FiBell className="text-gray-600 text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full" />
        </div>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">
          
          {/* Avatar with initial */}
          <div className="w-9 h-9 rounded-full bg-indigo-500 text-white 
                          flex items-center justify-center font-semibold text-sm">
            {initial}
          </div>

          {/* Name & role */}
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-800">{username}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>

    </header>
  );
}
