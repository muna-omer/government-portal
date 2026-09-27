import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  // Line chart data
  const lineData = [
    { name: "Jan", sales: 4500, purchases: 3200 },
    { name: "Feb", sales: 5200, purchases: 3800 },
    { name: "Mar", sales: 4800, purchases: 3500 },
    { name: "Apr", sales: 6100, purchases: 4200 },
    { name: "May", sales: 7300, purchases: 5000 },
    { name: "Jun", sales: 6900, purchases: 4800 },
  ];

  // Pie chart data
  const pieData = [
    { name: "Sales", value: 1855, color: "#3B82F6" },      // Blue
    { name: "Purchases", value: 2500, color: "#EF4444" },  // Red
    { name: "Expenses", value: 2450, color: "#F59E0B" },   // Orange
  ];

  // Low stock and recent activity data
  const lowStockItems = [
    { name: "USB Cable", stock: 5 },
  ];

  const recentActivities = [
    { name: "T-Shirt", quantity: 25, price: 20, date: "2025-01-25" },
    { name: "USB Cable", quantity: 15, price: 7, date: "2025-01-20" },
    { name: "Wireless Mouse", quantity: 50, price: 25, date: "2025-01-15" },
  ];

  return (
    <div className="flex-1 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="mb-6 text-gray-700">
        Welcome back! Here's an overview of your inventory and finances.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Sales */}
        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
          <div>
            <p className="text-sm text-gray-500">Total Sales</p>
            <h2 className="text-2xl font-semibold text-gray-900">$12,450</h2>
          </div>
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg">
            💰
          </div>
        </div>

        {/* Total Stock */}
        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
          <div>
            <p className="text-sm text-gray-500">Total Stock</p>
            <h2 className="text-2xl font-semibold text-gray-900">2,350</h2>
          </div>
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg">
            📦
          </div>
        </div>

        {/* Expenses */}
        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
          <div>
            <p className="text-sm text-gray-500">Expenses</p>
            <h2 className="text-2xl font-semibold text-gray-900">$4,320</h2>
          </div>
          <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-lg">
            💸
          </div>
        </div>

        {/* Net Profit */}
        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
          <div>
            <p className="text-sm text-gray-500">Net Profit</p>
            <h2 className="text-2xl font-semibold text-gray-900">$8,130</h2>
          </div>
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-lg">
            📈
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-semibold mb-3">Monthly Sales & Purchases</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value}`} />
                <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="purchases" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-semibold mb-3">Revenue Breakdown</h2>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, value }) => `${name}: $${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Low Stock Warnings & Recent Activity */}
<div className="mt-6 grid grid-cols-1 gap-4">
  {/* Low Stock */}
  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
    <div className="flex items-center mb-3 text-orange-700 font-semibold">
      <span className="mr-2">⚠️</span> Low Stock Warnings
    </div>
    <div className="space-y-2">
      {lowStockItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center bg-white rounded-lg p-3">
          <div>
            <p className="font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">Current stock: {item.stock} units</p>
          </div>
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
            Low Stock
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Recent Activity */}
  <div className="bg-white border border-gray-200 rounded-lg p-4">
    <h2 className="text-gray-900 font-semibold mb-3">Recent Activity</h2>
    <ul className="space-y-3">
      {recentActivities.map((activity, index) => (
        <li key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-600 rounded-lg p-2 flex items-center justify-center">
              🛒
            </div>
            <div>
              <p className="font-medium text-gray-900">Sale: {activity.name}</p>
              <p className="text-sm text-gray-500">
                {activity.quantity} units × ${activity.price}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900">${activity.quantity * activity.price}</p>
            <p className="text-xs text-gray-400">{activity.date}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
      </div>

  );
}
