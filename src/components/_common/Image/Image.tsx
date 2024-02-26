import React, { FC } from 'react';
import styles from './Image.module.scss';

type TImage = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const Image: FC<TImage> = ({ src, width, height, alt }) => {
  return (
    <img
      className={styles.img}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
