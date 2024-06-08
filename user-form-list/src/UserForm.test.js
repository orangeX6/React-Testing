import { render, screen, waitFor } from '@testing-library/react';
import UserForm from './UserForm';

describe('userform tests', () => {
  test('renders UserForm with two inputs', async () => {
    render(<UserForm />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    expect(screen.getByText('Name')).toBeInTheDocument();
    const button = screen.getByRole('button');

    expect(button).toBeVisible();
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });
});
