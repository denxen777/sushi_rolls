import React from 'react';

import styles from './Button.module.scss';

type TButtonProps = {
  btnType?: 'primary' | 'secondary' | 'modal';
  onClick?: (e?: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button: React.FC<TButtonProps> = ({
  btnType = 'primary',
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[btnType]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
