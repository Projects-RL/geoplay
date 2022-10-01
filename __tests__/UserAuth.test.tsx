import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from '../mocks/server';
import { renderWithProviders } from '../utils/test-utils';
import UserAuth from '../components/UserAuth';

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

  test('display error if email is wrong', async () => {
    renderWithProviders(<UserAuth />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'not.correct@mail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'pwd123' },
    });
    fireEvent.click(screen.getByDisplayValue('Sign in'));

    await new Promise((r) => setTimeout(r, 1000));

    expect(screen.getByText('Invalid login credentials')).toBeInTheDocument();
  });

  test('display error if password is wrong', async () => {
    renderWithProviders(<UserAuth />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@user.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'bajs123' },
    });
    fireEvent.click(screen.getByDisplayValue('Sign in'));

    await new Promise((r) => setTimeout(r, 1000));

    expect(screen.getByText('Invalid login credentials')).toBeInTheDocument();
  });

  test('display error if there is no email', () => {
    renderWithProviders(<UserAuth />);

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'bajs123' },
    });
    fireEvent.click(screen.getByDisplayValue('Sign in'));

    expect(screen.getByText('Email is missing'));
  });

  test('display error if there is no password', () => {
    renderWithProviders(<UserAuth />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'hej@mail.com' },
    });
    fireEvent.click(screen.getByDisplayValue('Sign in'));

    expect(screen.getByText('Password is missing'));
  });

  test('display error if both email and password is missing', () => {
    renderWithProviders(<UserAuth />);

    fireEvent.click(screen.getByDisplayValue('Sign in'));

    expect(screen.getByText('Password and Email is missing'));
  });
});
