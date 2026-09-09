import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ user: { email: 'creator@example.com' } }),
  });
});

test('logs in with valid credentials and opens the dashboard', async () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/email or username/i), {
    target: { value: 'creator@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i, { selector: 'input' }), {
    target: { value: 'creator123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /log in/i }));

  expect(await screen.findByText(/signed in as creator@example.com/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();
});
