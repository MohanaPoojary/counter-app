import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import { describe, it, expect } from 'vitest';


describe('Counter App', () => {
  it('renders with initial count', () => {
    render(<App />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });

  it('increments the count', async () => {
    render(<App />);
    const incrementBtn = screen.getByText('Increment');
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });

  it('resets the count', async () => {
    render(<App />);
    const incrementBtn = screen.getByText('Increment');
    const resetBtn = screen.getByText('Reset');

    await userEvent.click(incrementBtn);
    await userEvent.click(resetBtn);

    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });
});
