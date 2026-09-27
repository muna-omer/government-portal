import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export default function Reports ()  {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Reports</h1>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">Total Products: 120</p>
            <p className="text-gray-600">Total Sales: $5,200</p>
            <p className="text-gray-600">Total Expenses: $2,100</p>
            <p className="text-gray-600 font-bold mt-2">Profit: $3,100</p>
          </div>
        </main>
      </div>
    </div>
  );
};

// export default Reports;
