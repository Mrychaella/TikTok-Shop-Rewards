import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('logs in with valid credentials and opens the dashboard', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/email or username/i), {
    target: { value: 'creator@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i, { selector: 'input' }), {
    target: { value: 'creator123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /log in/i }));

  expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  expect(screen.getByText(/creator@example.com/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();
});
