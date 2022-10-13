import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatsModal from '../components/StatsModal';
import { renderWithProviders } from '../utils/test-utils';

describe('StatsModal', () => {
  const props = {
    time: 114267,
    correctCountries: 24,
    allCountries: 48,
  };

  test('That the correct elements renders', () => {
    renderWithProviders(<StatsModal {...props} />);

    expect(
      screen.getByRole('heading', { name: "You're done!" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Leaderboards' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });
});

// the amount of countries is correct
// the Time is displaying correctly
// The score is calculated correctly
// the Leaderboards button is redirecting the user
// the Home button is redirecting the user
// When the game is finished the StatsModal should appear
