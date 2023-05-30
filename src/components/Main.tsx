import React from 'react';
import { useSelector } from 'react-redux';

import { categories } from '../assets/categories';
import { Section } from './Section/Section';
import { useAppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/product/asyncAction';
import { productSelector } from '../redux/product/selectors';
import { LoadingError } from './LoadingError';

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(productSelector);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {status === 'error' ? (
        <LoadingError />
      ) : (
        categories.map((category, i) => (
          <Section
            key={i}
            category={category}
            index={i}
            items={items}
            status={status}
          />
        ))
      )}
    </div>
  );
};
