import './Payment.css'
// ShoppingCart.js
import {useContext, useState} from 'react';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { CartContext } from './CartContext';
import {Link} from "react-router-dom";
import {BASE_DJANGO_URL} from "./Home";
import {toast, ToastContainer} from 'react-toastify';

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

const deliveryFee= 10.00;

function Payment() {

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Online');

    // Function to calculate total sum
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('zł', ''));
            return total + price * item.quantity;
        }, 0);
    };

    const totalSum = (calculateTotal()+ deliveryFee).toFixed(2) ;

    // Validation functions


    // Event handlers
    const onDeliveryChange = (e) => {
        setPaymentMethod(e.target.value);
        const isOnline = e.target.value === "Online";
        document.getElementById("bank").disabled = !isOnline;
        document.getElementById("account").disabled = !isOnline;
    };

    const handleProceed = () => {
        if (paymentMethod === "Online") {
            if (!isValidBankName(bankName)) {
                toast.error("Please enter a valid bank name.");
            } else if (!isValidAccountNumber(accountNumber)) {
                toast.error("Please enter a valid account number.");
            } else {
                toast.success("Payment details are valid. Proceeding to the next step.");
                // Navigation to the next step goes here.
            }
        } else if (paymentMethod === "Przy odbiorze") {
            // Navigation to the next step for cash on delivery goes here.
            toast.success("Proceeding to the next step.");
        }
    };

    const isValidBankName = name => name.trim().length > 0;
    const isValidAccountNumber = number => {

        return number.length >= 26; // Adjust the length requirement as needed
    };

    // Example usage
    const handleAddToCart = (item) => {
        addToCart(item);
    };




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
            <ToastContainer />
            <div className="container-sc">
                <div className="personal-details">
                    <h2>Dane osobiste:</h2>
                    <label>Nazwa banku:</label>
                    <input id="bank" type="text" value={bankName} onChange={e => setBankName(e.target.value)} disabled={paymentMethod !== "Online"} />
                    <label>Numer konta:</label>
                    <input id="account" type="text" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} disabled={paymentMethod !== "Online"} />
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
                    <h2 >Zawartość koszyka:</h2>
                    <div className="col-md-9 book-grid-d">
                        {cartItems.map((item) => (
                            <ProductCard
                                key={item.id}
                                cover={`${BASE_DJANGO_URL}${item.cover}`}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                    <h2 >Suma:</h2>
                    <h3 className={'content'}>{totalSum} zł</h3>
                    <div className="actions">
                      <Link to={"/paymentSuccesful"}>  <button className="proceed-button"  onClick={handleProceed}>Przejdź dalej</button> </Link>
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



