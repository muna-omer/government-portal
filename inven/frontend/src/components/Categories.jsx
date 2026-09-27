export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Beverages",
      items: 24,
      icon: "🥤",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "Groceries",
      items: 42,
      icon: "🛒",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "Electronics",
      items: 15,
      icon: "💻",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      name: "Clothing",
      items: 30,
      icon: "👕",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="p-6  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Categories
          </h1>
          <p className="text-sm text-gray-500">
            Manage product categories
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
          + Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition cursor-pointer"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${cat.color}`}
            >
              <span className="text-xl">{cat.icon}</span>
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {cat.name}
            </h3>

            {/* Items */}
            <p className="text-sm text-gray-500 mt-1">
              {cat.items} items
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
