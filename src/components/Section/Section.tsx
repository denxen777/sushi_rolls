import React from 'react';

import styles from './Section.module.scss';
import { Product } from '../Product/Product';
import { Skeleton } from '../Skeleton';
import { TItemProduct } from '../../redux/product/types';

type TSectionProps = {
  category: string;
  index: number;
  items: TItemProduct[];
  status: string;
};

export const Section: React.FC<TSectionProps> = ({
  category,
  index,
  items,
  status,
}) => {
  return (
    <div className={styles.section} id={index.toString()}>
      <h2>{category}</h2>
      <div className={styles.wrap}>
        {status === 'loading' &&
          [...new Array(8)].map((_, i) => <Skeleton key={i} />)}
        {status === 'success' &&
          items.map(
            (item) =>
              index === item.categoryId && <Product key={item.id} {...item} />
          )}
      </div>
    </div>
  );
};
