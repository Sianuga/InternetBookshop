import React from 'react';
import { render, screen } from '@testing-library/react';
import Home, { fetchBooks } from './Home';

// Test sprawdza, czy komponent Home jest renderowany poprawnie
test('renders Home component', () => {
  render(<Home />);
  const pageTitle = screen.getByText(/Welcome to Bookstore/i);
  expect(pageTitle).toBeInTheDocument();
});

// Test sprawdza, czy funkcja fetchBooks zwraca dane z endpointu
test('fetchBooks function fetches data successfully', async () => {
  const booksData = await fetchBooks();
  expect(booksData.length).toBeGreaterThan(0);
});

// Test sprawdza, czy handleAddToCart dodaje książkę do koszyka
test('handleAddToCart function adds a book to the cart', () => {
  const mockAddToCart = jest.fn();
  const book = { id: 1, title: 'Sample Book', price: 20 };
  render(<Home addToCart={mockAddToCart} />);
  const addButton = screen.getByText('Add to Cart');
  addButton.click();
  expect(mockAddToCart).toHaveBeenCalledWith(book);
});

// Test sprawdza, czy aplikacja wyświetla komunikat o błędzie, gdy funkcja fetchBooks zwraca błąd
test('fetchBooks function throws an error', async () => {
  const mockFetch = jest.fn(() => {
    throw new Error('Error fetching books data');
  });
  const mockConsoleError = jest.spyOn(console, 'error');
  mockConsoleError.mockImplementation(() => {});
  await expect(fetchBooks(mockFetch)).rejects.toThrow('Error fetching books data');
  expect(mockConsoleError).toHaveBeenCalledWith('Error fetching books data');
  mockConsoleError.mockRestore();
});

// Test sprawdza, czy funkcja handleAddToCart wyświetla komunikat o sukcesie
test('handleAddToCart function displays a success message', () => {
  const mockToast = jest.fn();
  const book = { id: 1, title: 'Sample Book', price: 20 };
  render(<Home addToCart={mockToast} />);
  const addButton = screen.getByText('Add to Cart');
  addButton.click();
  expect(mockToast).toHaveBeenCalledWith(`${book.title} added to cart!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
});

// Test sprawdza, czy funkcja deleteBook usuwa książkę z listy
test('deleteBook function removes a book from the list', () => {
  const mockDeleteBook = jest.fn();
  const book = { id: 1, title: 'Sample Book', price: 20 };
  render(<Home deleteBook={mockDeleteBook} />);
  const deleteButton = screen.getByText('Delete');
  deleteButton.click();
  expect(mockDeleteBook).toHaveBeenCalledWith(book);
});

// Test sprawdza, czy funkcja paymetnMethodChange zmienia metodę płatności
test('paymentMethodChange function changes payment method', () => {
  const mockPaymentMethodChange = jest.fn();
  const paymentMethod = 'Online';
  render(<Home paymentMethodChange={mockPaymentMethodChange} />);
  const paymentMethodButton = screen.getByText('Online');
  paymentMethodButton.click();
  expect(mockPaymentMethodChange).toHaveBeenCalledWith(paymentMethod);
});

// Test sprawdza, czy funkcja onDeliveryChange zmienia metodę dostawy
test('onDeliveryChange function changes delivery method', () => {
  const mockOnDeliveryChange = jest.fn();
  const deliveryMethod = 'Na adres';
  render(<Home onDeliveryChange={mockOnDeliveryChange} />);
  const deliveryMethodButton = screen.getByText('Na adres');
  deliveryMethodButton.click();
  expect(mockOnDeliveryChange).toHaveBeenCalledWith(deliveryMethod);
});

// Test sprawdza, czy funkcja productQuantityChange zmienia ilość produktów
test('productQuantityChange function changes product quantity', () => {
  const mockProductQuantityChange = jest.fn();
  const productQuantity = 2;
  render(<Home productQuantityChange={mockProductQuantityChange} />);
  const productQuantityButton = screen.getByText('2');
  productQuantityButton.click();
  expect(mockProductQuantityChange).toHaveBeenCalledWith(productQuantity);
});

// Test sprawdza, czy funkcja onDeliveryChange zmienia metodę dostawy
test('onDeliveryChange function changes delivery method', () => {
  const mockOnDeliveryChange = jest.fn();
  const deliveryMethod = 'Na adres';
  render(<Home onDeliveryChange={mockOnDeliveryChange} />);
  const deliveryMethodButton = screen.getByText('Na adres');
  deliveryMethodButton.click();
  expect(mockOnDeliveryChange).toHaveBeenCalledWith(deliveryMethod);
});

// Test sprawdza, czy funkcja paymentMethodChange zmienia metodę płatności
test('paymentMethodChange function changes payment method', () => {
  const mockPaymentMethodChange = jest.fn();
  const paymentMethod = 'Online';
  render(<Home paymentMethodChange={mockPaymentMethodChange} />);
  const paymentMethodButton = screen.getByText('Online');
  paymentMethodButton.click();
  expect(mockPaymentMethodChange).toHaveBeenCalledWith(paymentMethod);
});

// Test sprawdza, czy funkcja handleQuantityChange zmienia ilość produktów
test('handleQuantityChange function changes product quantity', () => {
  const mockHandleQuantityChange = jest.fn();
  const productQuantity = 2;
  render(<Home handleQuantityChange={mockHandleQuantityChange} />);
  const productQuantityButton = screen.getByText('2');
  productQuantityButton.click();
  expect(mockHandleQuantityChange).toHaveBeenCalledWith(productQuantity);
});

// Test sprawdza, czy funkcja handleRemoveFromCart usuwa produkt z koszyka
test('handleRemoveFromCart function removes product from the cart', () => {
  const mockHandleRemoveFromCart = jest.fn();
  const product = { id: 1, title: 'Sample Book', price: 20 };
  render(<Home handleRemoveFromCart={mockHandleRemoveFromCart} />);
  const removeButton = screen.getByText('X');
  removeButton.click();
  expect(mockHandleRemoveFromCart).toHaveBeenCalledWith(product);
});

// Test sprawdza, czy funkcja handleProceed przechodzi do kolejnego kroku
test('handleProceed function proceeds to the next step', () => {
  const mockHandleProceed = jest.fn();
  const step = 2;
  render(<Home handleProceed={mockHandleProceed} />);
  const proceedButton = screen.getByText('Przejdź dalej');
  proceedButton.click();
  expect(mockHandleProceed).toHaveBeenCalledWith(step);
});

// Test sprawdza, czy funkcja handleFilterChange zmienia filtr
test('handleFilterChange function changes filter', () => {
  const mockHandleFilterChange = jest.fn();
  const filter = 'Sample Filter';
  render(<Home handleFilterChange={mockHandleFilterChange} />);
  const filterButton = screen.getByText('Sample Filter');
  filterButton.click();
  expect(mockHandleFilterChange).toHaveBeenCalledWith(filter);
});

// Test sprawdza, czy funkcja handleAddToCart dodaje produkt do koszyka
test('handleAddToCart function adds product to the cart', () => {
  const mockHandleAddToCart = jest.fn();
  const product = { id: 1, title: 'Sample Book', price: 20 };
  render(<Home handleAddToCart={mockHandleAddToCart} />);
  const addButton = screen.getByText('DODAJ');
  addButton.click();
  expect(mockHandleAddToCart).toHaveBeenCalledWith(product);
});

// Test sprawdza, czy funkcja handleQuantityChange zmienia ilość produktów
test('handleQuantityChange function changes product quantity', () => {
  const mockHandleQuantityChange = jest.fn();
  const productQuantity = 2;
  render(<Home handleQuantityChange={mockHandleQuantityChange} />);
  const productQuantityButton = screen.getByText('2');
  productQuantityButton.click();
  expect(mockHandleQuantityChange).toHaveBeenCalledWith(productQuantity);
});

// Test sprawdza, czy funkcja showMore zmienia ilość wyświetlanych produktów
test('showMore function changes amount of displayed products', () => {
  const mockShowMore = jest.fn();
  const products = 2;
  render(<Home showMore={mockShowMore} />);
  const showMoreButton = screen.getByText('Show More');
  showMoreButton.click();
  expect(mockShowMore).toHaveBeenCalledWith(products);
});

// Test sprawdza, czy funkcja routeChange zmienia ścieżkę
test('routeChange function changes route', () => {
  const mockRouteChange = jest.fn();
  const route = '/sample-route';
  render(<Home routeChange={mockRouteChange} />);
  const routeButton = screen.getByText('Sample Route');
  routeButton.click();
  expect(mockRouteChange).toHaveBeenCalledWith(route);
});

// Test sprawdza, czy funkcja handleAddToCart dodaje produkt do koszyka
test('handleAddToCart function adds product to the cart', () => {
  const mockHandleAddToCart = jest.fn();
  const product = { id: 1, title: 'Sample Book', price: 20 };
  render(<Home handleAddToCart={mockHandleAddToCart} />);
  const addButton = screen.getByText('DODAJ');
  addButton.click();
  expect(mockHandleAddToCart).toHaveBeenCalledWith(product);
});
