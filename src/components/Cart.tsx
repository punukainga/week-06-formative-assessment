import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store'; // Adjust the import based on your store setup

const Cart: React.FC = () => {
  // Access the cart state using useSelector
  const cartItems = useSelector((state: RootState) => state.data.cart);

  // Calculate total number of items and total price
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div data-testid="cart-items">
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
