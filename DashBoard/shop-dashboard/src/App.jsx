// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/sidebar/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Pages/Products";
import Customers from "./components/Pages/Customers";
import Orders from "./components/Pages/Orders";
import Transaction from "./components/Pages/Transaction";
import Settings from "./components/Pages/Settings";
import Message from "./components/Pages/Message";
import Support from "./components/Pages/Support";

function App() {
  return (
    <Router>
 <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Dashboard />} />
    <Route path="products" element={<Products/>} />
    <Route path="customers" element={<Customers/>} />
    <Route path="orders" element={<Orders/>} />
    <Route path="transactions" element={<Transaction/>} />
    <Route path="messages" element={<Message/>} />
    <Route path="support" element={<Support/>} />
    <Route path="settings" element={<Settings/>} />
  </Route>
<Route path="login" element={<div>This is login page</div>} />

  
 </Routes>
 </Router>
  );
}

export default App;
