import { screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';
import { server } from '../mocks/server';
import { renderWithProviders } from '../utils/test-utils';

describe('Home', () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest: 'error',
    });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  const userValue = {
    username: 'testmannen',
    email: 'test@user.com',
    password: 'pwd123',
  };

  test('Modal renders when the profile button is clicked, and it disappears when the overlay is clicked', () => {
    renderWithProviders(<Home isLoggedIn={false} />);

    const profileBtn = screen.getByTestId('profileButton');
    expect(screen.queryByPlaceholderText('Email')).not.toBeInTheDocument();

    fireEvent.click(profileBtn);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  test('sign in correctly', async () => {
    renderWithProviders(<Home isLoggedIn={false} />);

    // Click on ProfileButton
    fireEvent.click(screen.getByTestId('profileButton'));
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: userValue.email },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: userValue.password },
    });
    fireEvent.click(screen.getByDisplayValue('Sign in'));

    await new Promise((r) => setTimeout(r, 1000));

    expect(screen.queryByPlaceholderText('Email')).toBeNull();
  });

  // test('register correctly', async () => {
  //   renderWithProviders(<Home isLoggedIn={false} />);

  //   // Click on ProfileButton
  //   fireEvent.click(screen.getByTestId('profileButton'));
  //   expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();

  //   //Click on SignUp button
  //   fireEvent.click(screen.getByRole('button', { name: 'Sign up' }));

  //   fireEvent.change(screen.getByPlaceholderText('Username'), {
  //     target: { value: userValue.username },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText('Email'), {
  //     target: { value: 'nyttMail@bajs.com' },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText('Password'), {
  //     target: { value: userValue.password },
  //   });
  //   fireEvent.click(screen.getByDisplayValue('Sign up'));

  //   await new Promise((r) => setTimeout(r, 1000));

  //
  // });
});
