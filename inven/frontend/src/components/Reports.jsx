import React, { useState } from 'react';

const TABS = ['Summary', 'Sales', 'Purchases', 'Expenses'];

function Reports() {
  const [activeTab, setActiveTab] = useState('Summary');

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Reports
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Generate and download business reports
            </p>
          </div>
        </div>

        {/* Filters card */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="px-4 py-6 sm:px-6 sm:py-7">
            <h2 className="mb-4 text-base font-semibold text-slate-900">
              Report Filters
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* From Date */}
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  From Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    📅
                  </span>
                </div>
              </div>

              {/* To Date */}
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  To Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    📅
                  </span>
                </div>
              </div>

              {/* Report type */}
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Report Type
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="summary">Summary</option>
                    <option value="sales">Sales</option>
                    <option value="purchases">Purchases</option>
                    <option value="expenses">Expenses</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    ▼
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-2 flex flex-wrap items-center gap-3 sm:col-span-2 lg:col-span-1 lg:justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                >
                  <span className="text-lg">⬇️</span>
                  <span>Download PDF</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400"
                >
                  <span className="text-lg">📄</span>
                  <span>Download Excel</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/70">
          <div className="flex flex-wrap gap-1 px-3 py-1.5 sm:px-4">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-2xl px-4 py-2 text-xs font-semibold tracking-wide ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-emerald-100 bg-white px-5 py-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Revenue
            </p>
            <p className="mt-2 text-2xl font-semibold text-emerald-600">
              $1,855
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white px-5 py-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Purchases
            </p>
            <p className="mt-2 text-2xl font-semibold text-blue-600">
              $2,500
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white px-5 py-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Expenses
            </p>
            <p className="mt-2 text-2xl font-semibold text-orange-500">
              $2,450
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white px-5 py-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Net Profit
            </p>
            <p className="mt-2 text-2xl font-semibold text-red-500">
              $-3,095
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reports;











// export default function Reports() {
//     return (
//         <div className="p-6  bg-gray-50 min-h-screen">
//             <h1 className="text-2xl font-bold mb-6">Reports</h1>
//             <p className="text-gray-600">View your reports here.</p>

//         </div>
//     );
// }