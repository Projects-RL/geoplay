import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../utils/test-utils';
import SideMenu from '../components/SideMenu';

describe('SideMenu', () => {
  test('SideMenu should render the correct buttons', () => {
    renderWithProviders(<SideMenu />);

    expect(screen.getByText('Profile Page')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });
});
