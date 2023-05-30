import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/img/sushi_rolls_logo.png';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt='Логотип' width={100}  />
      <h1 className={styles.title}>SUSHI & ROLLS</h1>
    </div>
  );
};
