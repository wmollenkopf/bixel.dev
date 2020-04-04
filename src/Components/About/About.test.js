import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('renders initial about page', () => {
    const { getByText } = render(<About />);
    const headerElement = getByText(/About Me/i);
    expect(headerElement).toBeInTheDocument();
});
