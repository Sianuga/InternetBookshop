import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccesful.css'; // Importing the CSS file

function PaymentSuccesful() {
    const navigate = useNavigate();

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
