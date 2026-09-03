/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import App from '../App';

jest.mock('../static/css/main.scss', () => ({}));

describe('personal academic site', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
    window.scrollTo = jest.fn();
  });

  it('renders the homepage and personal title', async () => {
    render(<App />);

    expect(await screen.findByText(/Hi! I am Leyao\./)).toBeInTheDocument();
    expect(document.title).toBe('Home | Leyao (Lia) Tan');
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:leyao.tan@sauder.ubc.ca',
    );
  });

  it.each([
    ['Research', '/research', 'Working Paper'],
    ['Teaching', '/teaching', 'Instructor'],
    ['Credentials', '/credentials', 'Education'],
    ['Fun Facts', '/fun-facts', 'My name'],
  ])('navigates to %s', async (label, path, heading) => {
    render(<App />);
    await screen.findByText(/Hi! I am Leyao\./);

    fireEvent.click(screen.getByRole('link', { name: label }));

    expect(await screen.findByRole('heading', { name: heading })).toBeInTheDocument();
    expect(window.location.pathname).toBe(path);
    await waitFor(() => expect(document.title).toContain(`${label} |`));
  });

  it('preserves a redirect from the former about page', async () => {
    window.history.pushState({}, '', '/about');
    render(<App />);

    expect(await screen.findByRole('heading', { name: 'My name' })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/fun-facts');
  });
});
