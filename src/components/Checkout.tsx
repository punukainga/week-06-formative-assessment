import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.data.cart);

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
