import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideMenu from '../components/SideMenu';
import { renderWithProviders } from '../test-utils/renderWithProviders';

describe('SideMenu', () => {
  test('SideMenu should render the correct buttons when its used on the Home page', () => {
    renderWithProviders(<SideMenu page="Home" />);

    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  test('SideMenu should render the correct buttons when its used on the Game page', () => {
    renderWithProviders(<SideMenu page="Game" setShowGameInfo={jest.fn()} />);

    expect(screen.getByText('Game Info')).toBeInTheDocument();
    expect(screen.getByText('Exit Game')).toBeInTheDocument();
  });
});

// When Exit game is clicked the app re-routes to the home page
// When Profile is clicked the app re-routes to the Profile Page
// When Setting is clicked the app re-routes to the Settings Page
