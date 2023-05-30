import React from 'react';

import styles from './ButtonNavigation.module.scss';

type TButtonCart = {
  colorType?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export const ButtonNavigation: React.FC<TButtonCart> = ({ colorType = 'primary', children }) => {
  return <button className={`${styles.btn} ${styles[colorType]}`}>{children}</button>;
};
