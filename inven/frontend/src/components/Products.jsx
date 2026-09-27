// import React from "react";

// const products = [
//   {
//     id: 1,
//     name: "Laptop Pro",
//     price: "$1200",
//     image: "https://via.placeholder.com/150",
//     badge: "New",
//   },
//   {
//     id: 2,
//     name: "Smartphone X",
//     price: "$800",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Office Chair",
//     price: "$250",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     name: "Men's T-Shirt",
//     price: "$40",
//     image: "https://via.placeholder.com/150",
//     badge: "Sale",
//   },
//   {
//     id: 5,
//     name: "Book: React Guide",
//     price: "$25",
//     image: "https://via.placeholder.com/150",
//   },
// ];

// export default function Products() {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">Products</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden"
//           >
//             <div className="relative">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               {product.badge && (
//                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                   {product.badge}
//                 </span>
//               )}
//             </div>
//             <div className="p-4">
//               <h2 className="text-lg font-medium text-gray-800">{product.name}</h2>
//               <p className="mt-2 text-gray-600 font-semibold">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import React, { useMemo, useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Wireless Mouse',
    category: 'Electronics',
    supplier: 'Tech Supplies Inc.',
    purchasePrice: '$15',
    sellingPrice: '$25',
    quantity: 50,
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'USB Cable',
    category: 'Electronics',
    supplier: 'Tech Supplies Inc.',
    purchasePrice: '$3',
    sellingPrice: '$7',
    quantity: 5,
    status: 'Low Stock',
  },
  {
    id: 3,
    name: 'T-Shirt',
    category: 'Clothing',
    supplier: 'Fashion Wholesale',
    purchasePrice: '$10',
    sellingPrice: '$20',
    quantity: 75,
    status: 'In Stock',
  },
];

const statusStyles = {
  'In Stock': 'border-emerald-300 bg-emerald-50 text-emerald-700',
  'Low Stock': 'border-orange-300 bg-orange-50 text-orange-700',
};

function Products() {
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return initialProducts;
    const term = search.toLowerCase();
    return initialProducts.filter((product) =>
      [product.name, product.category, product.supplier].some((value) =>
        value.toLowerCase().includes(term),
      ),
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + Add button */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Products
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Manage your product inventory
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-base">
              +
            </span>
            <span>Add Product</span>
          </button>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Search bar */}
          <div className="border-b border-slate-200 px-4 pb-4 pt-6 sm:px-6">
            <div className="rounded-2xl bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm text-slate-800">
                <thead>
                  <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="pb-2 pr-6">Product Name</th>
                    <th className="pb-2 pr-6">Category</th>
                    <th className="pb-2 pr-6">Supplier</th>
                    <th className="pb-2 pr-6">Purchase Price</th>
                    <th className="pb-2 pr-6">Selling Price</th>
                    <th className="pb-2 pr-6">Quantity</th>
                    <th className="pb-2 pr-6">Status</th>
                    <th className="pb-2 pr-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="rounded-xl border-b border-slate-100 last:border-b-0"
                    >
                      <td className="whitespace-nowrap py-3 pr-6 text-sm font-semibold text-slate-900">
                        {product.name}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {product.category}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {product.supplier}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {product.purchasePrice}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {product.sellingPrice}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {product.quantity}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[product.status]}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-3 pr-2">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            type="button"
                            className="text-slate-700 hover:text-slate-900"
                            aria-label="Edit product"
                          >
                            {/* Edit icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 7.125L16.875 4.5M18 14v4.25A2.25 2.25 0 0115.75 20.5H5.25A2.25 2.25 0 013 18.25V7.75A2.25 2.25 0 015.25 5.5H9"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-600"
                            aria-label="Delete product"
                          >
                            {/* Delete icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 7h12M9.75 7V4.75A1.75 1.75 0 0111.5 3h1A1.75 1.75 0 0114.25 4.75V7M9 11.25l.75 7.5M15 11.25l-.75 7.5M5.25 7l.75 12.25A2.25 2.25 0 008.25 21.5h7.5a2.25 2.25 0 002.25-2.25L18.75 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredProducts.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="py-6 text-center text-sm text-slate-500"
                      >
                        No products found for &ldquo;{search}&rdquo;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;

