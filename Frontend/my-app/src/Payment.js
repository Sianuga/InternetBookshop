import './Payment.css'
// ShoppingCart.js
import {useContext, useState} from 'react';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { CartContext } from './CartContext';
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

function Payment() {

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

    const onDeliveryChange = (e) => {
        console.log(e.target.value);
        document.getElementById("bank").disabled = e.target.value === "Przy odbiorze";
        document.getElementById("account").disabled = e.target.value === "Przy odbiorze";
    }

    return (
        <div className="shopping-cart-page">
            <div className="container-sc">
                <div className="personal-details">
                    <h2>Dane osobiste:</h2>
                    <label>Nazwa banku:</label>
                    <input  id={'bank'} type="text" />
                    <label>Numer konta:</label>
                    <input id={'account'} type="text" />
                    <div>
                        <label>Forma płatności:</label>
                        <select  onChange={onDeliveryChange}>
                            <option value="Online"> Online</option>
                            <option value="Przy odbiorze">Przy odbiorze</option>
                        </select>
                    </div>
                    <div className="actions-f">
                        <Link to={"/delivery"}><button className="back-button">Powrót</button></Link>

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

                      <Link to={"/paymentSuccesful"}>  <button className="proceed-button">Przejdź dalej</button> </Link>
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


export default Payment



