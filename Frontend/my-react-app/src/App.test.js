import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders the login page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument();
});

test('shows the home page after a successful login', async () => {
  axios.post.mockResolvedValue({ data: { message: 'User logged in successfully' } });
  render(<App />);

  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'user@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /welcome to the home page/i })).toBeInTheDocument();
  });
});
