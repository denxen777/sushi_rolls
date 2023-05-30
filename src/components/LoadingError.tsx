import React from 'react';

import styles from '../Pages/NotFound/NotFound.module.scss';

export const LoadingError = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.title}>Упс...</h1>
      <h2 className={styles.subtitle}>Попробуйте открыть эту страницу позже.</h2>
    </div>
  );
};