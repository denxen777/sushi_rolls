import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';
import emptyImg from '../../assets/img/empty.svg';
import { cartSelector } from '../../redux/cart/selectors';
import CartProduct from '../../components/CartProduct/CartProduct';
import { ButtonNavigation } from '../../components/_common/ButtonNavigation/ButtonNavigation';
import { useAppDispatch } from '../../redux/store';
import { clearItems } from '../../redux/cart/slice';
import { Button } from '../../components/_common/Button/Button';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useSelector(cartSelector);

  const onClickClearItems = () => {
    const isClear = window.confirm('Вы уверены, что хотите очистить корзину?');
    if (isClear) {
      dispatch(clearItems());
    }
  };

  if (!items.length) {
    return (
      <div className={styles.empty}>
        <img src={emptyImg} alt='' />
        <h2>Ой, а тут пусто!</h2>
        <p>Добавьте что-нибудь из меню</p>
        <Link to={'/'}>
          <Button btnType={'modal'}>ПЕРЕЙТИ В МЕНЮ</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>
        Корзина
        <svg
          className={styles.icon}
          onClick={onClickClearItems}
          fill='none'
          height='23'
          viewBox='0 0 13 16'
          width='20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.1875 0.885417H9.14062L8.27009 0H3.91741L3.04688 0.885417H0V2.65625H12.1875V0.885417ZM0.870536 3.54167V14.1667C0.870536 15.1406 1.65402 15.9375 2.61161 15.9375H9.57589C10.5335 15.9375 11.317 15.1406 11.317 14.1667V3.54167H0.870536Z'
            fill='#e13d48'
          ></path>
        </svg>
      </h1>
      {items.map((item) => (
        <CartProduct key={item.id} {...item} />
      ))}
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>Сумма заказа:</h2>
          <p className={styles.total}>{totalPrice} ₽</p>
        </div>
        <div className={styles.buttons}>
          <Link to={'/'}>
            <ButtonNavigation>
              <svg
                className={styles.back}
                fill='none'
                height='12'
                viewBox='0 0 22 12'
                width='15'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  clipRule='evenodd'
                  d='M0.714355 1.56603C0.714355 2.38603 1.10818 2.66297 1.70878 3.26357C2.70124 4.25601 9.63268 11.2476 10.0182 11.5479C10.4131 11.8555 10.5232 11.9321 11.0804 11.9321C11.7336 11.9321 12.2093 11.3456 12.6173 10.9377L16.4543 7.10062C16.8155 6.73948 20.6678 2.92828 20.9016 2.62823C21.2091 2.23336 21.2858 2.12322 21.2858 1.56603C21.2858 0.860336 20.6254 0.199951 19.9197 0.199951C19.1999 0.199951 18.9089 0.507583 18.4231 0.993487C17.6949 1.72162 11.2327 8.24058 11.0001 8.39638C10.7752 8.24579 4.32059 1.73698 3.59717 1.01357C3.0899 0.506309 2.81413 0.199951 2.08042 0.199951C1.37474 0.199951 0.714355 0.860336 0.714355 1.56603Z'
                  fill='#707070'
                  fillRule='evenodd'
                ></path>
              </svg>
              ВЕРНУТЬСЯ В МЕНЮ
            </ButtonNavigation>
          </Link>
          <ButtonNavigation colorType={'secondary'}>
            ОФОРМИТЬ ЗАКАЗ
            <svg
              className={styles.forward}
              fill='none'
              height='12'
              viewBox='0 0 22 12'
              width='15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                d='M0.714355 1.56603C0.714355 2.38603 1.10818 2.66297 1.70878 3.26357C2.70124 4.25601 9.63268 11.2476 10.0182 11.5479C10.4131 11.8555 10.5232 11.9321 11.0804 11.9321C11.7336 11.9321 12.2093 11.3456 12.6173 10.9377L16.4543 7.10062C16.8155 6.73948 20.6678 2.92828 20.9016 2.62823C21.2091 2.23336 21.2858 2.12322 21.2858 1.56603C21.2858 0.860336 20.6254 0.199951 19.9197 0.199951C19.1999 0.199951 18.9089 0.507583 18.4231 0.993487C17.6949 1.72162 11.2327 8.24058 11.0001 8.39638C10.7752 8.24579 4.32059 1.73698 3.59717 1.01357C3.0899 0.506309 2.81413 0.199951 2.08042 0.199951C1.37474 0.199951 0.714355 0.860336 0.714355 1.56603Z'
                fill='#fff'
                fillRule='evenodd'
              ></path>
            </svg>
          </ButtonNavigation>
        </div>
      </div>
    </div>
  );
};

export default Cart;
