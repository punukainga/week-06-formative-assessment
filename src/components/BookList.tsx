import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom no navigate to checkout page
import Book from './Book';
import { RootState } from '../store';
import { addToCart } from '../slices/cartSlice'; // Import the addToCart action

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.data.books);
  const cart = useSelector((state: RootState) => state.data.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (id: number, name: string, price: number) => {
    dispatch(addToCart({ id, name, price }));
  };

  return (
    <div>
      <Link to="/checkout">CART</Link> {/* Navigate link to Checkout */}
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          name={book.name}
          price={book.price}
          addToCart={() => handleAddToCart(book.id, book.name, book.price)}
        />
      ))}
    </div>
  );
};

export default BookList;
