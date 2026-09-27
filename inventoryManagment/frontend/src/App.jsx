import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <div className="h-screen w-screen flex flex-col bg-yellow-200">

    {/* <Header/> */}
    <Sidebar/>
     <div className="flex-1 h-full bg-green-500">
    
    {/* <Dashboard/> */}
    </div>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router> */}
    <div className="flex-1"></div>
    </div>
    </>
  );
}

export default App;

