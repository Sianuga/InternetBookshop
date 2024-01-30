import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccesful.css'; // Importing the CSS file
import { useContext} from "react";
import { CartContext } from './CartContext';

function PaymentSuccesful() {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

    //Remove everything from cart at entrance

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    }

    cartItems.map((item) => (
        handleRemoveFromCart(item.id)
    ));

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="payment-successful-container">
            <h1 className="success-message">Płatność powiodła się</h1>
            <button className="go-home-btn" onClick={handleGoHome}>Powróć do strony głównej</button>
        </div>
    );
}

export default PaymentSuccesful;
