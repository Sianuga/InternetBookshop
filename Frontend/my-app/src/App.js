// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';
import Delivery from "./Delivery";
import Payment from "./Payment";
import Product from "./Product";
import Home from "./Home";
import Profile from "./ProfileEdit";
import { CartProvider } from './CartContext';
import IconBar from "./IconBar";
import PaymentSuccesful from "./PaymentSuccesful";

function App() {


    return (
        <CartProvider>
        <Router>
           <IconBar/>

            {/* Define your routes */}

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/edit-profile" element={<Profile />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/paymentSuccesful" element={<PaymentSuccesful/>}/>
                {/* ... other routes */}

            </Routes>

        </Router>
</CartProvider>
    );
}

export default App;
