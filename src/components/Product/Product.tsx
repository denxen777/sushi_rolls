import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Product.module.scss';
import { TItemProduct } from '../../redux/product/types';
import { Button } from '../_common/Button/Button';
import { useAppDispatch } from '../../redux/store';
import {
  addItemToCart,
  decrement,
  increment,
  removeItem,
} from '../../redux/cart/slice';
import { ButtonCounter } from '../_common/ButtonCounter/ButtonCounter';
import { cartSelector } from '../../redux/cart/selectors';
import { addItemToModal, setActiveModal } from '../../redux/modal/slice';
import { Image } from '../_common/Image/Image';
import defaultImage from '../../assets/img/noimage.png';
import { IWithCheckImages, withCheckImages } from '../../hoc/withCheckImages';

const Product: React.FC<TItemProduct & IWithCheckImages> = ({
  id,
  imgURL,
  name,
  weight,
  price,
  amount,
  description,
  isErrorImg
}) => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(cartSelector);

  const findItem = items.find((item) => item.id === id);

  const addItemOnCLick = (e?: React.MouseEvent) => {
    e?.stopPropagation();

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
  };

  const onClickDecrement = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    findItem && findItem.amount > 1
      ? dispatch(decrement(id))
      : dispatch(removeItem(id));
  };

  const onClickIncrement = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    dispatch(increment(id));
  };

  const openModalOnClick = () => {
    dispatch(
      addItemToModal({
        id,
        imgURL: isErrorImg ? defaultImage : imgURL,
        name,
        weight,
        price,
        amount,
        description,
      } as TItemProduct)
    );
    dispatch(setActiveModal(true));
  };

  return (
    <div className={styles.product} onClick={openModalOnClick}>
      <div className={styles.header}>
        <div className={styles.inner}>
          <Image
            src={isErrorImg ? defaultImage : imgURL}
            alt={'Картинка'}
            height={230}
          />
        </div>
        <div className={styles.info}>
          <h3>{name}</h3>
          <span className={styles.weight}>{weight} г</span>
        </div>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>{price} ₽</span>
        {findItem ? (
          <ButtonCounter
            amount={findItem.amount}
            onClickDecrement={onClickDecrement}
            onClickIncrement={onClickIncrement}
          />
        ) : (
          <Button btnType={'secondary'} onClick={(e) => addItemOnCLick(e)}>
            В КОРЗИНУ
          </Button>
        )}
      </div>
    </div>
  );
};

const WithCheckImages = withCheckImages(Product);

export default WithCheckImages;