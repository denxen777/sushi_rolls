import React from 'react';

import styles from './ButtonCounter.module.scss';

type TButtonCounterProps = {
  amount: number;
  onClickDecrement: (e?: React.MouseEvent) => void;
  onClickIncrement: (e?: React.MouseEvent) => void;
  btnType?: 'secondary';
  isDisabled?: boolean;
};

export const ButtonCounter: React.FC<TButtonCounterProps> = ({
  amount,
  onClickDecrement,
  onClickIncrement,
  btnType = '',
  isDisabled = false,
}) => {
  return (
    <div
      className={`${styles.buttons} ${styles[btnType]}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button disabled={isDisabled} onClick={(e) => onClickDecrement(e)} className={styles.btn}>
        <svg
          fill='none'
          height='2'
          viewBox='0 0 12 2'
          width='12'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.25 1.74854H0.75V0.248535H11.25V1.74854Z'
            fill='#707070FF'
          ></path>
        </svg>
      </button>
      <span className={styles.text}>{amount}</span>
      <button onClick={(e) => onClickIncrement(e)} className={styles.btn}>
        <svg
          fill='none'
          height='12'
          viewBox='0 0 12 12'
          width='12'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.25 6.74854H6.75V11.2485H5.25V6.74854H0.75V5.24854H5.25V0.748535H6.75V5.24854H11.25V6.74854Z'
            fill='#707070FF'
          ></path>
        </svg>
      </button>
    </div>
  );
};
