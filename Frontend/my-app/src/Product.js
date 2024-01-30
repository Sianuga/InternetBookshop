// Product.js
import './Product.css';
import cloneStudentsCover from "./Img/preview-page0.jpg";
import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { fetchBooks } from './Home';
import { BASE_DJANGO_URL } from './Home';
import { CartContext } from './CartContext';
import {useContext} from "react";

const booksData = [
    // { id: 1, title: 'Clone. Students', price: '33.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Bookhere...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book  description here...Book description here...' },
    // { id: 2, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...' },
    // { id: 3, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 4, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 5, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 6, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...' },
    // { id: 7, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 8, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 9, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 10, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    // { id: 11, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...' },
    // { id: 12, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},

];
    function Product() {
        const { id } = useParams();
        const [mainBook, setMainBook] = useState([]);
        // const relatedBooks = booksData.slice(1).sort(() => 0.5 - Math.random()).slice(0,6 );
        const [relatedBooks, setRelatedBooks] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    // Fetch main book by id
                    const books = await fetchBooks();
                    console.log('Books:', books);
                    const mainBook = books[id-1];
                    console.log('Main book:', mainBook);
                    setMainBook(mainBook);

                    const extractedRelatedBooks = books.filter(book => book.id !== mainBook.id).sort(() => 0.5 - Math.random()).slice(0, 6);
                    setRelatedBooks(extractedRelatedBooks);

                } catch (error) {
                    console.error('Error fetching product data:', error);
                }
            };

            fetchData();
        }, [id]); // Make sure to include 'id' in the dependency array to re-fetch data when the id changes



    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    // Example usage
    const handleAddToCart = (item) => {
        addToCart(item);
    };


    return (
        <div>
            <div className="product-page">
                <div className="book-cover">
                    <img className={'mainBookCover'} src={`${BASE_DJANGO_URL}${mainBook.cover}`} alt={mainBook.title} />
                </div>
                <div className="book-details">
                    <h1 className="book-title">{mainBook.title}</h1>
                    <p className="author">{mainBook.author}</p>
                    <p className="description">{mainBook.description}</p>
                    <div className="actions">
                        <button className="add-to-cart">Dodaj pozycję</button>
                        <button className="back-to-catalog">Powrót do katalogu</button>
                    </div>


                </div>

            </div>
            <div className="related-books">
                <h2 className={'othersToo'}>Inni kupowali też</h2>
                <div className="book-grid-p">
                    {relatedBooks.map((relatedBook) => (
                        <Link key={relatedBook.id} to={`/product/${relatedBook.id}`}>
                        <img key={relatedBook.id} src={`${BASE_DJANGO_URL}${relatedBook.cover}`} alt={relatedBook.title} className="related-book-cover" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}




export default Product;
