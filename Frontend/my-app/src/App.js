import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Delivery from "./Delivery";
import Payment from "./Payment";
import Product from "./Product";
import Home from "./Home";
import Profile from "./ProfileEdit";

function App() {
    return (
        <Router>
            <nav style={{ display: 'none' }}>
                <Link to="/edit-profile">Edit Profile</Link>
                <Link to="/shopping-cart">Shopping Cart</Link>
            </nav>

            {/* Define your routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit-profile" element={<Profile />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/product" element={<Product/>}/>
                {/* ... other routes */}
            </Routes>
        </Router>
    );
}

export default App;
