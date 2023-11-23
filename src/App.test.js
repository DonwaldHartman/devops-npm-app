import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the header text', () => {
    const { getByText } = render(<App />);
    const headerText = getByText(/This is a sample project for Node testing on DevOps projects/i);
    expect(headerText).toBeInTheDocument();
  });

  it('renders the subheader text', () => {
    const { getByText } = render(<App />);
    const subheaderText = getByText(/If you are able to read this then is clearly working/i);
    expect(subheaderText).toBeInTheDocument();
  });

  test('renders App component', () => {
    render(<App />);
    
    // You can add more specific tests based on your component's behavior.
    // For example, you can check if specific elements or texts are present on the page.
    expect(screen.getByText('This is a sample project for Node testing on DevOps projects')).toBeInTheDocument();
    expect(screen.getByText('If you are able to read this then is clearly working')).toBeInTheDocument();
  });
});
