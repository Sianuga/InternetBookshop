import './ShoppingCart.css'
// ShoppingCart.js
import {useState} from 'react';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { CartContext } from './CartContext';
import {useContext} from "react";


// Mock data
const booksData = [
    { id: 1, title: 'Clone. Students', price: '33.99zł', cover: cloneStudentsCover },
    { id: 2, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover },
    { id: 3, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover },
    { id: 4, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover },
    { id: 5, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover },
    { id: 6, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover },
    { id: 7, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover },
    // ... more books
];

function ShoppingCart() {
    const { cartItemss, addToCart, removeFromCart } = useContext(CartContext);

    // Example usage
    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const [filteredBooks, setFilteredBooks] = useState(booksData);
    // Dummy data for the shopping cart items
    const cartItems = [
        { id: 1, title: 'Clone. Students', quantity: 1 },
        { id: 2, title: 'Rider', quantity: 1 },
        { id: 3, title: 'Human design', quantity: 1 }
    ];

    // Function to handle removing items from the cart
    const removeItemFromCart = (itemId) => {
        console.log('Remove item:', itemId);
        // Implement removal logic
    };

    const handleQuantityChange = (id, newQuantity) => {
        // Logic to update quantity for the item with the given id
        console.log(`Update quantity for ${id}: ${newQuantity}`);
        // You will need to implement state management for the quantities
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
                    <input type="text" />
                    <div className="actions">
                        <button className="back-button">Powrót</button>
                        <button className="proceed-button">Przejdź dalej</button>
                    </div>
                </div>
                <div className="cart-items">
                    <h2 className={'content'}>Zawartość koszyka:</h2>
                    <div className="col-md-9 book-grid-sc">
                        {filteredBooks.map((book) => (
                            <ProductCard
                                key={book.id}
                                cover={book.cover}
                                title={book.title}
                                price={book.price}
                                quantity={1} // Replace with the actual quantity state
                                setQuantity={(newQuantity) => handleQuantityChange(book.id, newQuantity)}
                            />
                        ))}
                    </div>
                    <div className="actions">
                        <button className="back-button">Powrót</button>
                        <button className="proceed-button">Przejdź dalej</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ cover, title, price, quantity, setQuantity }) {
    return (
        <div className="product-card">
            <img src={cover} alt={title} className="card-img" />
            <div className="card-details">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
            </div>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="quantity-input"
            />
        </div>
    );
}


export default ShoppingCart



