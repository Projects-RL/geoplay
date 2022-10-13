import React, { useState } from 'react';
import styles from '../styles/StatsModal.module.css';
import { FaMapMarkedAlt, FaRegHourglass, FaStar } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { stringConversion } from '../utils/helpers';
import { handleReady } from '../redux/features/gameOptionsSlice';
import { useAppDispatch } from '../hooks/hooks';
import LoadingDots from './LoadingDots';

interface Props {
  correctCountries: number;
  allCountries: number;
  time: number;
}

function StatsModal({ correctCountries, allCountries, time }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);

  const scoreString = (correctCountries / Math.floor(time / 1000))
    .toString()
    .substring(0, 5)
    .replace('.', '');

  const stringToOutput = stringConversion(scoreString);

  async function navigateToLeaderboards() {
    setIsLoading(true);
    dispatch(handleReady(false));
    await router.push('/leaderboards');
  }

  async function navigateHome() {
    setIsLoading(true);
    dispatch(handleReady(false));
    await router.push('/');
  }

  return (
    <div className={styles.container}>
      <h1>You're done!</h1>
      <p>Blabalbla some message. Here is your score:</p>
      <div className={`${styles.scoreContainer} ${styles.correctCountries}`}>
        <FaMapMarkedAlt className={styles.icon} />
        <span>
          {correctCountries}/{allCountries}
        </span>
      </div>
      <div className={`${styles.scoreContainer} ${styles.time}`}>
        <FaRegHourglass className={styles.icon} />
        <span>
          {minutes === '00' ? '' : minutes + 'm '}
          {seconds}s
        </span>
      </div>
      <div className={`${styles.scoreContainer} ${styles.score}`}>
        <FaStar className={styles.icon} />
        <span>{stringToOutput}</span>
      </div>
      <div className={styles.btnContainer}>
        {/* <button onClick={handlePlayAgain}>Play again</button> */}
        <button onClick={navigateToLeaderboards}>
          {isLoading ? <LoadingDots /> : <>Leaderboards</>}
        </button>
        <button onClick={navigateHome}>
          {isLoading ? <LoadingDots /> : <>Home</>}
        </button>
      </div>
    </div>
  );
}

export default StatsModal;
