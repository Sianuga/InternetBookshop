import React, { useState } from 'react';
import './App.css';

// Mock data
const books = [
  { id: 1, title: 'Clone. Students', price: '33.99zł', cover: 'path_to_cover_1' },
  { id: 2, title: 'Rider', price: '40.99zł', cover: 'path_to_cover_2' },
    { id: 3, title: 'Clone. Students', price: '33.99zł', cover: 'path_to_cover_1' },
    { id: 4, title: 'Rider', price: '40.99zł', cover: 'path_to_cover_2' },
    { id: 5, title: 'Clone. Students', price: '33.99zł', cover: 'path_to_cover_1' },
    { id: 6, title: 'Rider', price: '40.99zł', cover: 'path_to_cover_2' },
    { id: 7, title: 'Clone. Students', price: '33.99zł', cover: 'path_to_cover_1' },
    { id: 8, title: 'Rider', price: '40.99zł', cover: 'path_to_cover_2' },
  // ... more books
];

function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleFilterChange = (e) => {
    // Logic to filter books based on the event
    console.log(e.target.value);
    // For now, we'll just display all books regardless of the filter
    setFilteredBooks(books);
  };

  const handlePageChange = (direction) => {
    // Logic to change page
    console.log(direction);
  };

  return (
      <div className="App">
        <div className="user-account">
          {/* User account will go here */}
        </div>
        <div className="filter">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="products">
          {filteredBooks.map((book) => (
              <ProductCard key={book.id} cover={book.cover} title={book.title} price={book.price} />
          ))}
        </div>
        <div className="pagination">
          <Pagination currentPage={1} totalPages={10} onPageChange={handlePageChange} />
        </div>
      </div>
  );
}

function ProductCard({ cover, title, price }) {
  return (
      <div className="product-card">
        <img src={cover} alt={title} />
        <h3>{title}</h3>
        <p>Cena: {price}</p>
        <button>DODAJ</button>
      </div>
  );
}

function Filter({ onFilterChange }) {
  return (
      <div className="filter">
        <input type="text" placeholder="Nazwa" onChange={onFilterChange} />
        <select onChange={onFilterChange}>
          <option value="fantasy">Fantasy</option>
          {/* Other categories */}
        </select>
        {/* Price range inputs */}
        <button>Filtruj</button>
      </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
      <div className="pagination">
        <button onClick={() => onPageChange('prev')}>Poprzednia strona</button>
        <span>{currentPage}/{totalPages}</span>
        <button onClick={() => onPageChange('next')}>Następna strona</button>
      </div>
  );
}

export default App;
