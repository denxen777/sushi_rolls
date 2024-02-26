import React from 'react';

import styles from './CartProduct.module.scss';
import { TItemCart } from '../../redux/cart/types';
import { ButtonCounter } from '../_common/ButtonCounter/ButtonCounter';
import { useAppDispatch } from '../../redux/store';
import { decrement, increment, removeItem } from '../../redux/cart/slice';
import { Image } from '../_common/Image/Image';

export const CartProduct: React.FC<TItemCart> = ({
  id,
  imgURL,
  name,
  weight,
  amount,
  price,
}) => {
  const dispatch = useAppDispatch();

  const onClickDecrement = () => {
    amount > 1 ? dispatch(decrement(id)) : dispatch(removeItem(id));
  };

  const onClickIncrement = () => {
    dispatch(increment(id));
  };

  return (
    <div className={styles.cartProduct}>
      <div className={styles.product}>
        <div>
          <Image src={imgURL} alt={'Картинка'} width={120} height={100} />
        </div>
        <div>
          <h4>{name}</h4>
          <span>{weight} г</span>
        </div>
      </div>
      <div className={styles.data}>
        <ButtonCounter
          amount={amount}
          onClickDecrement={onClickDecrement}
          onClickIncrement={onClickIncrement}
        />
        <div className={styles.price}>
          <span>{price * amount} ₽</span>
        </div>
        <div>
          <svg
            className={styles.icon}
            onClick={() => dispatch(removeItem(id))}
            fill='none'
            height='16'
            viewBox='0 0 13 16'
            width='13'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.1875 0.885417H9.14062L8.27009 0H3.91741L3.04688 0.885417H0V2.65625H12.1875V0.885417ZM0.870536 3.54167V14.1667C0.870536 15.1406 1.65402 15.9375 2.61161 15.9375H9.57589C10.5335 15.9375 11.317 15.1406 11.317 14.1667V3.54167H0.870536Z'
              fill='#5C6370'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
