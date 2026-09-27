// export default function Purchases() {
//     return (
//         <div className="p-6  bg-gray-50 min-h-screen">
//             <h1 className="text-2xl font-bold mb-6">Purchases</h1>
//             <p className="text-gray-600">Manage your purchases here.</p>
//         </div>
//     );

// }


import React from 'react';

const purchases = [
  {
    id: 1,
    date: '2025-01-10',
    product: 'Wireless Mouse',
    supplier: 'Tech Supplies Inc.',
    quantity: 100,
    pricePerUnit: '$15',
    total: '$1500',
  },
  {
    id: 2,
    date: '2025-01-12',
    product: 'T-Shirt',
    supplier: 'Fashion Wholesale',
    quantity: 100,
    pricePerUnit: '$10',
    total: '$1000',
  },
];

function Purchases() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + New Purchase button */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Purchases
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Record and manage purchase transactions
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-base">
              +
            </span>
            <span>New Purchase</span>
          </button>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Card header */}
          <div className="border-b border-slate-200 px-4 py-4 sm:px-6">
            <h2 className="text-base font-semibold text-slate-900">
              Purchase History
            </h2>
          </div>

          {/* Table */}
          <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm text-slate-800">
                <thead>
                  <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="pb-2 pr-6">Date</th>
                    <th className="pb-2 pr-6">Product</th>
                    <th className="pb-2 pr-6">Supplier</th>
                    <th className="pb-2 pr-6">Quantity</th>
                    <th className="pb-2 pr-6">Price/Unit</th>
                    <th className="pb-2 pr-6">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {purchases.map((purchase) => (
                    <tr
                      key={purchase.id}
                      className="rounded-xl border-b border-slate-100 last:border-b-0"
                    >
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {purchase.date}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm font-semibold text-slate-900">
                        {purchase.product}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {purchase.supplier}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {purchase.quantity}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {purchase.pricePerUnit}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {purchase.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Purchases;