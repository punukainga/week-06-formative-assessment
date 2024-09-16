import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('Tests', () => {
  it('should render Pride and Prejudice', () => {
    render(<App />);
  });

  it('should click on the first Add to Cart button', () => {
    render(<App />);
    const button = screen.getAllByTestId('add-to-cart-1')[0];
    userEvent.click(button);
  });

  it('should have added 2 items to the cart, checks the total items and the total price', async () => {
    render(<App />);
    const button1 = screen.getAllByTestId('add-to-cart-2')[0];
    const button2 = screen.getAllByTestId('add-to-cart-3')[0];
    const button3 = screen.getAllByTestId('checkout-link-1')[0];

    userEvent.click(button1);
    userEvent.click(button2);
    userEvent.click(button3); // Go to another screen

    // Wait for the total items count to update
    await waitFor(() => {
      expect(screen.getAllByTestId('total-items')[0].textContent).toContain(
        'Total items: 3'
      ); // Three because of the test above
      expect(screen.getAllByTestId('total-price')[0].textContent).toContain(
        'Total: $20'
      ); // Thirty because of the test above
    });
  });
});
