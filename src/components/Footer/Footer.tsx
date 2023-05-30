import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const curtYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.phone}>8-800-800-80-80</h2>
        <div className={styles.info}>
          <p>SUSHI & ROLLS, {curtYear}</p>
          <p>sushi_rolls@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
