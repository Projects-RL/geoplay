import React from 'react';
import style from '../styles/GameInfo.module.css';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks/hooks';

interface Props {
  setPlayerHasClickedReady: (playerHasClickedReady: boolean) => void;
  setCountdownStarted: (countdownStarted: boolean) => void;
  showGameInfo: boolean;
  setShowGameInfo: (showGameInfo: boolean) => void;
}

function GameInfo({
  setPlayerHasClickedReady,
  setCountdownStarted,
  showGameInfo,
  setShowGameInfo,
}: Props) {
  const continent = useAppSelector((state: RootState) => {
    return state.gameOptions.continent;
  });

  function handleStart() {
    setPlayerHasClickedReady(true);
    setCountdownStarted(true);
  }

  function handleClose() {
    setShowGameInfo(false);
  }

  return (
    <div className={style.container}>
      <h1>{continent}</h1>
      <p>
        Click on the correct countries as quick as possible, you only have 1
        chance per country.
      </p>
      <p>
        When Every country has been displayed the timer is stopped and your
        final score is calculated.
      </p>
      {!showGameInfo && <p>When you are ready, click on Start, Good luck!</p>}
      {showGameInfo ? (
        <button onClick={handleClose}>Close</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
    </div>
  );
}

export default GameInfo;
