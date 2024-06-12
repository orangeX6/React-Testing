import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  // Render the component
  const users = [
    { name: 'jane', email: 'jane@mail.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  render(<UserList users={users} />);

  return { users };
}

describe('User list test', () => {
  test('renders one row per user', () => {
    // Render the component
    renderComponent();
    // const users = [
    //   { name: 'jane', email: 'jane@mail.com' },
    //   { name: 'sam', email: 'sam@sam.com' },
    // ];

    // render(<UserList users={users} />);

    // screen.logTestingPlaygroundURL();

    // Find all the rows in the table
    // const { getAllByRole } = within(screen.getByTestId('users'));
    // const rows = getAllByRole('row');
    // OR
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
  });

  // test('renders one row per user (container.querySelector approach)', () => {
  //   // Render the component
  //   const users = [
  //     { name: 'jane', email: 'jane@mail.com' },
  //     { name: 'sam', email: 'sam@sam.com' },
  //   ];

  //   const { container } = render(<UserList users={users} />);

  //   // screen.logTestingPlaygroundURL();

  //   // Find all the rows in the table
  //   // eslint-disable-next-line
  //   const rows = container.querySelectorAll('tbody tr');

  //   // Assertion: correct number of rows in the table
  //   expect(rows).toHaveLength(2);
  // });

  test('render the email and name of each user', () => {
    // Render the component
    const { users } = renderComponent();
    // const users = [
    //   { name: 'jane', email: 'jane@mail.com' },
    //   { name: 'sam', email: 'sam@sam.com' },
    // ];

    // render(<UserList users={users} />);

    // screen.logTestingPlaygroundURL();

    users.forEach((user) => {
      const name = screen.getByRole('cell', { name: user.name });
      const email = screen.getByRole('cell', { name: user.email });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
});
