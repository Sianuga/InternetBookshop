import './ShoppingCart.css'
// ShoppingCart.js

import { CartContext } from './CartContext';
import {useContext} from "react";
import {Link} from "react-router-dom";




function ShoppingCart() {
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

    const handleQuantityChange = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };





    return (
        <div className="shopping-cart-page">
            <div className="container-sc">
                <div className="personal-details">
                    <h2>Dane osobiste:</h2>
                    <label>Imię:</label>
                    <input type="text" />
                    <label>Nazwisko:</label>
                    <input type="text" />
                    <label>NIP:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="text" />
                    <label>Telefon:</label>
                    <input className={'fText'} type="text" />
                    <div className="actions">
                        <Link to={"/"}> <button className="back-button">Powrót</button> </Link>

                    </div>
                </div>

                <div className="cart-items">
                    <h2 className={'content'}>Zawartość koszyka:</h2>
                    <div className="col-md-9 book-grid-sc">
                        {cartItems.map((item) => (
                            <ProductCard
                                key={item.id}
                                cover={item.cover}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                                onRemove={() => handleRemoveFromCart(item.id)}
                            />
                        ))}
                    </div>
                    <div className="actions">
                        <Link to={"/delivery"}><button className="proceed-button">Przejdź dalej</button></Link>
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



