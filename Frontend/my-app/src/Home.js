import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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

function Home() {
    const [filteredBooks, setFilteredBooks] = useState(booksData);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (book) => {
        console.log('Add to cart:', book);
        addToCart(book);
    };


    const handleFilterChange = (e) => {
        console.log(e.target.value);

        setFilteredBooks(booksData);
    };



    const handleCartClick = () => {
        console.log('Cart icon clicked');

    };

    const handleProfileClick = () => {
        // Handle profile icon click
    };


    const handlePriceChange = (value) => {
        setPriceRange({ ...priceRange, max: value });

    };


    return (
        <div className="container main">

            <div className="row">
                <div className="col-md-9 book-grid">
                    {filteredBooks.map((book) => (
                        <ProductCard
                            key={book.id}
                            cover={book.cover}
                            title={book.title}
                            price={book.price}
                            onAddToCart={() => handleAddToCart(book)}
                        />
                    ))}
                </div>
                <div className="col-md-3 filter-menu">
                    <Filter onFilterChange={handleFilterChange} onPriceChange={handlePriceChange} priceRange={priceRange} />
                </div>
            </div>

        </div>
    );
}


function ProductCard({ cover, title, price, onAddToCart }) {
    return (
        <div className="product-card w-1/2 md:w-1/3 px-2 mb-4">

            <div className="card">

                <img src={cover} alt={title} className="card-img-top" />

                <div className="card-body">

                    <h5 className="card-title">{title}</h5>

                    <p className="card-text">{price}</p>

                    <button className="btn btn-primary" onClick={onAddToCart}>DODAJ</button>

                </div>

            </div>

        </div>

    );
}

function Filter({ onFilterChange, onPriceChange, priceRange }) {
    return (
        <div className="col-4">
            <input type="text" className="form-control mb-3" placeholder="Nazwa" onChange={onFilterChange} />
            <select className="form-select mb-3" onChange={onFilterChange}>
                <option defaultValue>Fantasy</option>
                <option value="sci-fi">Science Fiction</option>
                <option value="mystery">Mystery</option>
            </select>
            <input
                type="range"
                className="form-range mb-3"
                min="0"
                max="100"
                value={priceRange.max}
                onChange={(e) => onPriceChange(e.target.value)}
            />
            <p>Price Range: {priceRange.min}zł - {priceRange.max}zł</p>
            <button className="btn btn-outline-secondary w-100">Filtruj</button>
        </div>
    );
}


export default Home;
