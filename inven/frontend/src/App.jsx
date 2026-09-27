import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";
import Expenses from "./components/Expenses";
import Header from "./components/Header";
import Products from "./components/Products";
import Purchases from "./components/Purchases";
import Reports from "./components/Reports";
import Sales from "./components/Sales";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import Suppliers from "./components/Suppliers";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <div className="flex h-screen">
   <Sidebar />
         {/* <Header />  
      <Dashboard />  */}
        <main className="flex-1 overflow-auto p-4">
<Routes>
 
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} /> 
          
</Routes>
</main>
        {/* Sidebar on the left */}
      {/* <Sidebar /> */}

      {/* Main content area */}
      {/* <div className="flex-1 flex flex-col overflow-auto  "> */}
        {/* Header above the dashboard only */}
        {/* <Header /> */}

        {/* Dashboard content */}
       {/* <Dashboard />
        <Categories />
        <Products />
        <Suppliers />
        <Purchases />
        <Sales />
        <Expenses />
        <Reports />
        <Settings /> */}

        
      </div>
    {/* </div> */}
    </>
  );
}

