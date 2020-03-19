import React from 'react';
import { render } from '@testing-library/react';
import Listing from './Listing';

test('it renders', () => {
    const { getByText } = render(<Listing name="Anthony"/>);
    const message = getByText(/Listing imported from the WebAssembly component here./i);
    expect(message).toBeInTheDocument();
    const name = getByText(/Anthony/i);
    expect(name).toBeInTheDocument();
});

