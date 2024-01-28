import './Delivery.css'
// ShoppingCart.js
import {useContext, useState} from 'react';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { CartContext } from './CartContext';

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

function Delivery() {
    const [zipCode, setZipCode] = useState('');

    const { cartItemss, addToCart, removeFromCart } = useContext(CartContext);

    // Example usage
    const handleAddToCart = (item) => {
        addToCart(item);
    };


    const handleZipCodeChange = (event) => {
        const { value } = event.target;
        const zipCodePattern = /^[0-9]{0,2}-?[0-9]{0,3}$/;

        // This will allow input if it's empty (for backspace) or partially matches the pattern
        if (zipCodePattern.test(value)) {
            setZipCode(value);
        }
    };

    const handleZipCodeBlur = (event) => {
        const { value } = event.target;
        const zipCodePattern = /^[0-9]{2}-?[0-9]{3}$/;

        // If the input value doesn't match the pattern, reset it
        if (!zipCodePattern.test(value)) {
            setZipCode('');
        }
    }



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

    const onDeliveryChange = (e) => {
        console.log(e.target.value);
        document.getElementById("address").disabled = e.target.value !== "Na adres";
    }

    return (
        <div className="shopping-cart-page">
            <div className="container-sc">
                <div className="personal-details">
                    <h2>Dane osobiste:</h2>
                    <label>Miasto:</label>
                    <input type="text" />
                    <label>Kod pocztowy:</label>
                    <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={zipCode}
                        onChange={handleZipCodeChange}
                        onBlur={handleZipCodeBlur}
                        pattern="[0-9]{2}-[0-9]{3}"
                        placeholder="00-000"
                        title="Kod miasta powinien być w formacie 00-000"
                        maxLength="6" // 5 digits + hyphen
                    />
                    <label>Ulica/ Nr. lokalu:</label>
                    <input id={'address'} type="text" />
                    <div>
                    <label>Forma dostawy:</label>
                    <select  onChange={onDeliveryChange}>
                        <option value="Na adres">Na adres</option>
                        <option value="Odbiór osobisty">Odbiór osobisty</option>
                    </select>
                    </div>
                    <div className="actions">
                        <button className="back-button">Powrót</button>
                        <button className="proceed-button">Przejdź dalej</button>
                    </div>
                </div>
                <div className="cart-items">
                    <h2 className={'content'}>Zawartość koszyka:</h2>
                    <div className="col-md-9 book-grid-d">
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
            <h3 className={'quantity'}>{quantity}</h3>
        </div>
    );
}


export default Delivery;



