import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
