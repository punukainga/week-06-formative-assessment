import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, beforeEach } from 'vitest';
import App from './App';
import '@testing-library/jest-dom';

describe('Tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render Pride and Prejudice', () => {
    expect(screen.getByText('Pride and Prejudice')).toBeInTheDocument();
  });

  it('should render 1984', () => {
    expect(screen.getByText('1984')).toBeInTheDocument();
  });

  it('should render Crime and Punishment', () => {
    expect(screen.getByText('Crime and Punishment')).toBeInTheDocument();
  });

  it('should click on the Add to cart button for 1984', () => {
    const button1984 = screen.getByTestId('add-to-cart-1984');
    userEvent.click(button1984);
    expect(screen.getByTestId('cart-items')).toHaveTextContent('1984');
  });

  it('should click on the Add to cart button for Crime and Punishment', () => {
    const buttonCrimeAndPunishment = screen.getByTestId(
      'add-to-cart-crime-and-punishment'
    );
    userEvent.click(buttonCrimeAndPunishment);
    expect(screen.getByTestId('cart-items')).toHaveTextContent(
      'Crime and Punishment'
    );
  });
});
