import './ShoppingCart.css'
// ShoppingCart.js
import {useState} from 'react';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { CartContext } from './CartContext';
import {useContext} from "react";
import {Link} from "react-router-dom";


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


    // Function to update quantity
    const updateQuantity = (id, newQuantity) => {
        const updatedBooksData = filteredBooks.map(book => {
            if (book.id === id) {
                return { ...book, quantity: newQuantity };
            }
            return book;
        });
        setFilteredBooks(updatedBooksData);
    };

    // Function to remove item from cart
    const removeItemFromCart = (id) => {
        const updatedBooksData = filteredBooks.filter(book => book.id !== id);
        setFilteredBooks(updatedBooksData);
    };

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



    const handleQuantityChange = (id, newQuantity) => {
        // Logic to update quantity for the item with the given id
        console.log(`Update quantity for ${id}: ${newQuantity}`);
        // You will need to implement state management for the quantities
        booksData.map((book) => { if (book.id === id) { book.quantity = newQuantity } });
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
                        {filteredBooks.map((book) => (
                            <ProductCard
                                key={book.id}
                                id={book.id}
                                cover={book.cover}
                                title={book.title}
                                price={book.price}
                                quantity={book.quantity}
                                updateQuantity={updateQuantity}
                                removeItemFromCart={removeItemFromCart}
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

function ProductCard({ id, cover, title, price, quantity, updateQuantity, removeItemFromCart }) {
    return (
        <div className="product-card">
            <button onClick={() => removeItemFromCart(id)} className="remove-item">X</button>
            <img src={cover} alt={title} className="card-img" />
            <div className="card-details">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>

            </div>
            <div className="quantity-controls">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => updateQuantity(id, Math.max(1, parseInt(e.target.value)))}
                    className="quantity-input"
                />

            </div>
        </div>
    );
}


export default ShoppingCart



