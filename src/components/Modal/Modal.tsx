import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Modal.module.scss';
import { useAppDispatch } from '../../redux/store';
import { addItemToCart } from '../../redux/cart/slice';
import { ButtonCounter } from '../_common/ButtonCounter/ButtonCounter';
import { Button } from '../_common/Button/Button';
import { modalSelector } from '../../redux/modal/selectors';
import {
  clearItemAmount,
  decrement,
  increment,
  setActiveModal,
} from '../../redux/modal/slice';
import { Image } from '../_common/Image/Image';

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { item, activeModal } = useSelector(modalSelector);

  const { id, imgURL, name, weight, price, amount, description } = item;

  const onClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    dispatch(setActiveModal(false));
    if (amount > 1) {
      dispatch(clearItemAmount(1));
    }
  };

  const addItemOnCLick = () => {
    dispatch(
      addItemToCart({
        id,
        imgURL,
        name,
        weight,
        price,
        amount,
      })
    );
    onClose();
  };

  React.useEffect(() => {
    activeModal
      ? document.body.classList.add('noScroll')
      : document.body.classList.remove('noScroll');
  }, [activeModal]);

  return (
    <div
      className={
        activeModal ? `${styles.modal} ${styles.active}` : styles.modal
      }
      onClick={(e) => onClose(e)}
    >
      <div className={styles.wrap}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.img}>
            <Image src={imgURL} alt={'Картинка'} width={300} />
          </div>
          <div className={styles.info}>
            <div className={styles.desc}>
              <h2>{name}</h2>
              <p className={styles.text}>{weight} г</p>
              <p className={styles.text}>{description}</p>
            </div>
            <div className={styles.buttons}>
              <ButtonCounter
                amount={amount}
                onClickDecrement={() => dispatch(decrement())}
                onClickIncrement={() => dispatch(increment())}
                btnType={'secondary'}
                isDisabled={amount === 1}
              />
              <Button btnType={'modal'} onClick={addItemOnCLick}>
                ДОБАВИТЬ
                <span> {price * amount} ₽</span>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.close}>
          <svg
            className={styles.icon}
            height='30'
            viewBox='0 0 16 16'
            width='40'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.5837 1.94413L14.0562 0.416626L8.00033 6.47246L1.94449 0.416626L0.416992 1.94413L6.47283 7.99996L0.416992 14.0558L1.94449 15.5833L8.00033 9.52746L14.0562 15.5833L15.5837 14.0558L9.52783 7.99996L15.5837 1.94413Z'
              fill='#fff'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
