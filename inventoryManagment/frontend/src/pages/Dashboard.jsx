// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import StatCard from "../components/StateCard";
// // import Table from "../components/Table";

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />

//       <div className="flex flex-col flex-1">
//         <Navbar />

//         <main className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//             <StatCard title="Products" value="120" />
//             <StatCard title="Sales" value="$5,200" />
//             <StatCard title="Expenses" value="$2,100" />
//             <StatCard title="Profit" value="$3,100" />
//           </div>

//           <Table />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
const Dashboard = () => {
  return (
    <div className="h-full p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4 ">Dashboard</h1>
      {/* Dashboard content goes here */}
    </div>
  );
};
export default Dashboard;