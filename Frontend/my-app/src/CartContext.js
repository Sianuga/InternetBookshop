import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            // Check if item is already in the cart
            const isItemInCart = prevItems.find(cartItem => cartItem.id === item.id);

            if (isItemInCart) {
                // Update the quantity if it is
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            // If not, add the item with a quantity of 1
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
