import React from 'react';
import styles from '../styles/StatsModal.module.css';

import { FaMapMarkedAlt, FaRegHourglass, FaStar } from 'react-icons/fa';

function StatsModal() {
  return (
    <div className={styles.container}>
      <h1>You're done!</h1>
      <p>Blabalbla some message. Here is your score:</p>
      <div className={`${styles.scoreContainer} ${styles.correctCountries}`}>
        <FaMapMarkedAlt className={styles.icon} />
        <span>32/54</span>
      </div>
      <div className={`${styles.scoreContainer} ${styles.time}`}>
        <FaRegHourglass className={styles.icon} />
        <span>02:54</span>
      </div>
      <div className={`${styles.scoreContainer} ${styles.score}`}>
        <FaStar className={styles.icon} />
        <span>172</span>
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
