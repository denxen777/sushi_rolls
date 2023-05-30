import React from 'react';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Кажется что-то пошло не так!</h2>
      <div className={styles.text}>
        <p>Страница, которую вы запрашиваете, не существует.</p>
        <p>Возможно она была удалена, или вы набрали неверный адрес.</p>
      </div>
    </div>
  );
};

export default NotFound;