import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideMenu from '../components/SideMenu';
import { renderWithProviders } from '../test-utils/renderWithProviders';

describe('SideMenu', () => {
  test('SideMenu should render the correct buttons', () => {
    renderWithProviders(<SideMenu />);

    expect(screen.getByText('Profile Page')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });
});
