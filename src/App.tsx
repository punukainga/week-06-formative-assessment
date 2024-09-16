import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Import the Checkout component
import { store } from './utils/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Cart />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<BookList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
