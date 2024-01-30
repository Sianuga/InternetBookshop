import React, {useContext, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import cloneStudentsCover from './Img/preview-page0.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export const BASE_DJANGO_URL = 'http://localhost:8000';

export const fetchBooks = async () => {
    try {
        const endpoint = 'http://127.0.0.1:8000/bookshop/all-books/';
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books data:', error);
      throw error;
    }
  };



  const booksData = fetchBooks();

function Home() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (book) => {
        console.log('Add to cart:', book);
        addToCart(book);
        toast.success(`${book.title} added to cart!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const [allBooks, setAllBooks] = useState([]); // Original list of books
    const [filteredBooks, setFilteredBooks] = useState([]); // Filtered list of books

    // Fetch books data and set states
    useEffect(() => {
        const fetchBooksData = async () => {
            try {
                const data = await fetchBooks();
                setAllBooks(data); // Set original list
                setFilteredBooks(data); // Initially, filtered list is the same as the original
                setUniqueCategories([...new Set(data.map(book => book.category))]); // Get unique categories
            } catch (error) {
                console.error('Error fetching books data:', error);
                setLoading(false);
            }
        };
        fetchBooksData();
    }, []);



    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [loading, setLoading] = useState(true);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [nameFilter, setNameFilter] = useState('');

    // Handle filter change
    const handleFilterChange = (filters) => {
        let updatedFilteredBooks = allBooks; // Start with the original list

        // Apply filters
        if (filters.category !== 'All Categories') {
            updatedFilteredBooks = updatedFilteredBooks.filter(book => book.category === filters.category);
        }
        if (filters.name) {
            updatedFilteredBooks = updatedFilteredBooks.filter(book => book.title.toLowerCase().includes(filters.name.toLowerCase()));
        }
        updatedFilteredBooks = updatedFilteredBooks.filter(book => parseFloat(book.price) <= parseFloat(filters.price.max));

        setFilteredBooks(updatedFilteredBooks); // Update only the filtered list
    };

    //   const handleFilterChange = (selectedCategory) => {
    //     // Filter books based on the selected category
    //     if (selectedCategory === 'All Categories') {
    //         setFilteredBooks(allBooks);
    //     } else {
    //         const filteredBooks = allBooks.filter(book => book.category === selectedCategory);
    //         setFilteredBooks(filteredBooks);
    //     }
    // };


    const handleCartClick = () => {
        console.log('Cart icon clicked');

    };

    const handleProfileClick = () => {
        // Handle profile icon click
    };


    // const handlePriceChange = (maxPrice) => {
    //     const parsedMaxPrice = parseInt(maxPrice, 10);

    //     // Filter books based on the selected price range
    //     const filteredBooks = allBooks.filter(book => parseFloat(book.price) <= parsedMaxPrice);
    //     setFilteredBooks(filteredBooks);

    //     // Update the price range state
    //     setPriceRange({ min: 0, max: parsedMaxPrice });
    // }


    return (
        <div className="container main">
            <ToastContainer />
            <div className="row">
                <div className="col-md-9 book-grid">
                    {filteredBooks.map((book) => (
                        <ProductCard
                            key={book.id}
                            cover={`${BASE_DJANGO_URL}${book.cover}`}
                            title={book.title}
                            price={book.price}
                            id={book.id}
                            onAddToCart={() => handleAddToCart(book)}
                        />

                    ))}
                </div>
                <div className="col-md-3 filter-menu">
                    <Filter onFilterChange={handleFilterChange} categories={uniqueCategories} />
                </div>
            </div>

        </div>
    );


}



function ProductCard({ cover, title, price, id, onAddToCart }) {
    const linkTo = `/product/${id}`;
    return (
        <div className="product-card w-1/2 md:w-1/3 px-2 mb-4">

            <div className="card">

                <Link to={linkTo}>
                <img src={cover} alt={title} className="card-img-top" />
                </Link>
                <div className="card-body">

                    <h5 className="card-title">{title}</h5>

                    <p className="card-text">{price}</p>

                    <button className="btn btn-primary" onClick={onAddToCart}>DODAJ</button>

                </div>

            </div>

        </div>
    );
}



function Filter({ onFilterChange, categories }) {
    const [nameFilter, setNameFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All Categories');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

    const handleNameChange = (e) => {
        setNameFilter(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    }

    const handlePriceChange = (value) => {
        setPriceRange({
            ...priceRange,
            max: value
        });
    }

    const handleFilterClick = () => {
        // Pass the filters to the parent component
        onFilterChange({
            name: nameFilter,
            category: categoryFilter,
            price: priceRange
        });
    }

    return (

        <div className="col-4">
            <input type="text" className="form-control mb-3" placeholder="Nazwa" onChange={handleNameChange} />
            <select className="form-select mb-3" onChange={handleCategoryChange}>
                <option defaultValue>All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <input
                type="range"
                className="form-range mb-3"
                min="0"
                max="100"
                value={priceRange.max}
                onChange={(e) => handlePriceChange(e.target.value)}
            />
            <p>Price Range: {priceRange.min}zł - {priceRange.max}zł</p>
            <button className="btn btn-outline-secondary w-100" onClick={handleFilterClick}>Filtruj</button>
        </div>
    );
}

export default Home;
