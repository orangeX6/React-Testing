import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('User list test', () => {
  test('renders one row per user', () => {
    // Render the component
    const users = [
      { name: 'jane', email: 'jane@mail.com' },
      { name: 'sam', email: 'sam@sam.com' },
    ];

    render(<UserList users={users} />);

    // Find all the rows in the table
    screen.logTestingPlaygroundURL();

    // Assertion: correct number of rows in the table
  });

  // test('render the email and name of each user', () => {
  //   render(<UserList />);
  // });
});
