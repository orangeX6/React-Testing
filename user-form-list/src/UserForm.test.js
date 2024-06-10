import { render, screen, waitFor } from '@testing-library/react';
import UserForm from './UserForm';
import user from '@testing-library/user-event';

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

  // !
  test('it calls onUserAdd when the form is submitted', async () => {
    // ! NOT THE BEST IMPLEMENTATION
    const argList = [];
    const callback = (...args) => {
      argList.push(args);
    };

    // Render the component
    render(<UserForm onUserAdd={callback} />);

    // Find two inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('Hello{arrowleft}world ');

    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard('hello@mail.com');

    // Find the button
    // Simulate clicking the button
    const button = screen.getByRole('button');
    await user.click(button);

    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({
      name: 'Hellworld o',
      email: 'hello@mail.com',
    });
  });

  // -> BEST IMPLEMENTATION FOR ABOVE TEST
  test('calls onUserAdd when the form is submitted', async () => {
    const mock = jest.fn();

    // Render
    render(<UserForm onUserAdd={mock} />);

    // Matchers
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    await user.click(nameInput);
    await user.keyboard('jane');

    await user.click(emailInput);
    await user.keyboard('jane@mail.com');

    const button = screen.getByRole('button');
    await user.click(button);

    // Assertions
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@mail.com' });
  });
});
