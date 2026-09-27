import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Sales() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Sales</h1>

          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">2026-02-03</td>
                  <td className="px-6 py-4">Sugar</td>
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">$10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">2026-02-03</td>
                  <td className="px-6 py-4">Rice</td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">$12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

// export default Sales;
