import React from 'react';
import styles from '../styles/StatsModal.module.css';

import { FaMapMarkedAlt, FaRegHourglass, FaStar } from 'react-icons/fa';

interface Props {
  correctCountries: number;
  allCountries: number;
  time: number;
}

function StatsModal({ correctCountries, allCountries, time }: Props) {
  const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);

  const scoreString = (correctCountries / Math.floor(time / 1000))
    .toString()
    .substring(0, 5)
    .replace('.', '');

  const stringToOutput = scoreString.includes('0')
    ? scoreString.replace('0', '')
    : scoreString;

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
        <button>Play again</button>
        <button>Leaderboards</button>
        <button>Home</button>
      </div>
    </div>
  );
}

export default StatsModal;
