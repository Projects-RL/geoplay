import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatsModal from '../components/StatsModal';
import { stringConversion } from '../utils/helpers';
import { createMockRouter } from '../test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { renderWithProviders } from '../test-utils/renderWithProviders';

describe('StatsModal', () => {
  const router = createMockRouter({});
  const props = {
    time: 114267,
    correctCountries: 24,
    allCountries: 48,
    setGameStarted: jest.fn(),
  };

  test('that the correct elements renders', () => {
    renderWithProviders(<StatsModal {...props} />);

    expect(
      screen.getByRole('heading', { name: "You're done!" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Leaderboards' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });

  test('that the amount of countries is correct', () => {
    renderWithProviders(<StatsModal {...props} />);

    expect(screen.getByText('24/48')).toBeInTheDocument();
  });

  test('that the Time is displaying correctly', () => {
    renderWithProviders(<StatsModal {...props} />);

    expect(screen.getByText('01m 54s')).toBeInTheDocument();
  });

  test('that the score is calculated correctly', () => {
    renderWithProviders(<StatsModal {...props} />);

    const scoreString = (props.correctCountries / Math.floor(props.time / 1000))
      .toString()
      .substring(0, 5)
      .replace('.', '');

    const expectedScore = stringConversion(scoreString);

    expect(screen.getByText(expectedScore)).toBeInTheDocument();
  });

  test('that the Leaderboards button is redirecting the user', () => {
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <StatsModal {...props} />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Leaderboards' }));
    expect(router.push).toHaveBeenCalledWith('/leaderboards');
  });

  test('that the Home button is redirecting the user', () => {
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <StatsModal {...props} />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Home' }));
    expect(router.push).toHaveBeenCalledWith('/');
  });

  test('that setGameStarted is called with false to ensure that the gameInfo component disappears', () => {
    renderWithProviders(<StatsModal {...props} />);

    expect(props.setGameStarted).toBeCalledWith(false);
  });
});

// When the game is finished the StatsModal should appear
