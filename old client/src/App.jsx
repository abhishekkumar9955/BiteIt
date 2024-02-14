
import './App.css'
// import useState from 'react';
// import Home from './components/Home';
// import Menu from './components/Menu';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDashboardPage from './pages/AdminDashboardPage';
import OrderPage from './pages/OrderPage';
import MenuItemPage from './pages/MenuItemPage';
import DiscountCouponPage from './pages/DiscountCouponPage';
import Sidebar from './components/Sidebar';
function App() {



  return (
<div className="flex">
<Sidebar />
      <Router>

        <div className="flex">
       
          {/* <Navbar /> */}

          <div className="p-4 mx-auto flex-1"> {/* Main Content */}
            <Routes>
              <Route exact path="/" element={<OrderPage />} />
              <Route exact path="/orders" element={<OrderPage />} />
              <Route exact path="/dashboard" element={<AdminDashboardPage />} />
              <Route exact path="/menu" element={<MenuItemPage />} />
              <Route exact path="/discounts" element={<DiscountCouponPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
