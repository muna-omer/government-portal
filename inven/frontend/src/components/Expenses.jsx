import React from 'react';

const expenses = [
  {
    id: 1,
    date: '2025-01-01',
    category: 'Rent',
    description: 'Monthly office rent',
    amount: '$2000',
    type: 'Recurring',
  },
  {
    id: 2,
    date: '2025-01-05',
    category: 'Utilities',
    description: 'Electricity bill',
    amount: '$150',
    type: 'Recurring',
  },
  {
    id: 3,
    date: '2025-01-10',
    category: 'Marketing',
    description: 'Social media ads',
    amount: '$300',
    type: 'One-time',
  },
];

function Expenses() {
  const total = '$2,450';

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + Add Expense button */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Expenses
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Track and manage business expenses
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-base">
              +
            </span>
            <span>Add Expense</span>
          </button>
        </div>

        {/* Total Expenses card */}
        <div className="mb-8 rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 px-6 py-6 shadow-sm">
          <p className="text-sm font-medium text-red-500">
            Total Expenses
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            {total}
          </p>
        </div>

        {/* Expense history card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Card header */}
          <div className="border-b border-slate-200 px-4 py-4 sm:px-6">
            <h2 className="text-base font-semibold text-slate-900">
              Expense History
            </h2>
          </div>

          {/* Table */}
          <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm text-slate-800">
                <thead>
                  <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="pb-2 pr-6">Date</th>
                    <th className="pb-2 pr-6">Category</th>
                    <th className="pb-2 pr-6">Description</th>
                    <th className="pb-2 pr-6">Amount</th>
                    <th className="pb-2 pr-6">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr
                      key={expense.id}
                      className="rounded-xl border-b border-slate-100 last:border-b-0"
                    >
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {expense.date}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {expense.category}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {expense.description}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {expense.amount}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6 text-sm text-slate-700">
                        {expense.type}
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

export default Expenses;













// export default function Expenses() {
//     return (
//         <div className="p-6  bg-gray-50 min-h-screen">
//             <h1 className="text-2xl font-bold mb-6">Expenses</h1>

//             <p className="text-gray-600">Manage your expenses here.</p>
//         </div>
//     );
// }