import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hooks news', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/hooks news/i);
  expect(h1Element).toBeInTheDocument();
});
