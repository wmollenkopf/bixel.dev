import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial home page title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/bixel\.dev/i);
  expect(linkElement).toBeInTheDocument();
});
