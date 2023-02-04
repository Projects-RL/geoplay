import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideMenu from '../components/SideMenu';
import { renderWithProviders } from '../test-utils/renderWithProviders';

describe('SideMenu', () => {
  test('SideMenu should render the correct buttons when its used on the Game page', () => {
    renderWithProviders(<SideMenu page="Game" setShowGameInfo={jest.fn()} />);

    expect(screen.getByText('Game Info')).toBeInTheDocument();
    expect(screen.getByText('Exit Game')).toBeInTheDocument();
  });
});
