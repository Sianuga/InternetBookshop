import './ShoppingCart.css'
// ShoppingCart.js

import { CartContext } from './CartContext';
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BASE_DJANGO_URL} from "./Home";
import {toast, ToastContainer} from 'react-toastify';




function ShoppingCart() {
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Update state on input change
    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    // Adjust the phone number regex as needed
    const phoneRegex = /^(\+\d{1,3})?\d{9,}$/;

    const isValidData = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name.trim() || !surname.trim() || !emailRegex.test(email) || !phoneRegex.test(phone)) {
            toast.error("Please fill out the form correctly.");
            return false;
        }
        return true;
    };

    const isCartEmpty = () => {
        if (cartItems.length === 0) {
            toast.error("Your cart is empty.");
            return true;
        }
        return false;
    }

    // Modified proceed function
    const handleProceed = (event) => {

        if (!isValidData() || isCartEmpty()) {
            event.preventDefault(); // Prevent default action (navigation)
        }
        // If valid, navigation will proceed as normal
    };

    const handleQuantityChange = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    useEffect(() => {
        const ids = cartItems.map(item => item.id);
        const uniqueIds = new Set(ids);
        if (uniqueIds.size !== ids.length) {
            console.log('Duplicate keys found in cartItems');
        }
    }, [cartItems]);





    return (
        <div className="shopping-cart-page">
            <ToastContainer />
            <div className="container-sc">
                <div className="personal-details">
                    <h2>Dane osobiste:</h2>
                    <label>Imię:</label>
                    <input autoComplete={"given-name"} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Nazwisko:</label>
                    <input autoComplete={"family-name"} type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    <label>NIP:</label>
                    <input type="text" autoComplete={"on"}/>
                    <label>Email:</label>
                    <input autoComplete={"email"} type="text" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                    <label>Telefon:</label>
                    <input autoComplete={"tel"} className={'fText'} value={phone} onChange={(e) => handleInputChange(e, setPhone)} type="text" />
                    <div className="actions">
                        <Link to={"/"}> <button className="back-button">Powrót</button> </Link>

                    </div>
                </div>

                <div className="cart-items">
                    <h2 >Zawartość koszyka:</h2>
                    {isCartEmpty ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="col-md-9 book-grid-sc">
                            {cartItems.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    cover={`${BASE_DJANGO_URL}${item.cover}`}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                                    onRemove={() => handleRemoveFromCart(item.id)}
                                />
                            ))}
                        </div>
                    )}
                    <div className="actions">
                        <Link to={"/delivery"}>
                            <button className="proceed-button" onClick={handleProceed} >
                                Przejdź dalej
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ cover, title, price, quantity, onQuantityChange, onRemove }) {
    return (
        <div className="product-card">
            <button onClick={onRemove} className="remove-item">X</button>
            <img src={cover} alt={title} className="card-img" />
            <div className="card-details">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>

            </div>
            <div className="quantity-controls">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => onQuantityChange(Number(e.target.value))}
                    className="quantity-input"
                />

            </div>
        </div>
    );
}


export default ShoppingCart



