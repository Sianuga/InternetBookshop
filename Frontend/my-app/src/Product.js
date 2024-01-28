// Product.js
import './Product.css';
import cloneStudentsCover from "./Img/preview-page0.jpg";
const booksData = [
    { id: 1, title: 'Clone. Students', price: '33.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Book description here...Bookhere...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book here...Book  description here...Book description here...' },
    { id: 2, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...' },
    { id: 3, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 4, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 5, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 6, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...' },
    { id: 7, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 8, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 9, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 10, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},
    { id: 11, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover, author: 'Author Name', description: 'Book description here...' },
    { id: 12, title: 'Rider', price: '40.99zł', cover: cloneStudentsCover , author: 'Author Name', description: 'Book description here...'},

];
function Product() {
    const mainBook = booksData[0];
    const relatedBooks = booksData.slice(1).sort(() => 0.5 - Math.random()).slice(0,6 );

    return (
        <div>
            <div className="product-page">
                <div className="book-cover">
                    <img className={'mainBookCover'} src={mainBook.cover} alt={mainBook.title} />
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
                        <img key={relatedBook.id} src={relatedBook.cover} alt={relatedBook.title} className="related-book-cover" />
                    ))}
                </div>
            </div>
        </div>

    );
}




export default Product;
