import React from 'react';
import * as Scroll from 'react-scroll';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Category.module.scss';
import { categories } from '../../assets/categories';
import { Button } from '../_common/Button/Button';
import { cartSelector } from '../../redux/cart/selectors';

export const Category: React.FC = () => {
  const params = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { items } = useSelector(cartSelector);

  const amountProducts = items.reduce(
    (acc: number, item) => acc + item.amount,
    0
  );

  const onCLickCheck = (e: React.MouseEvent) => {
    !items.length && e.preventDefault();
  };

  const setActiveHandler = (to: string) => {
    setTimeout(() => {
      navigate(`/${to}`);
      const elem = document.querySelector('.__active__');
      elem?.scrollIntoView({ block: 'nearest' });
    }, 0);
  };

  const setInactiveHandler = () => {
    setTimeout(() => {
      const elem = document.querySelector('.__active__');
      if (!elem) {
        navigate(`/`);
      }
    }, 0);
  };

  React.useEffect(() => {
    if (params.categoryId) {
      setTimeout(() => {
        Scroll.scroller.scrollTo(params.categoryId, {
          smooth: true,
          duration: 700,
          offset: -100,
        });
      }, 800);
    }
  }, []);

  return (
    <div className={styles.category}>
      <ScrollContainer
        component={'ul'}
        className={styles.list}
        activationDistance={30}
      >
        {categories.map((category, i) => (
          <Scroll.Link
            key={i}
            className={styles.item}
            to={i.toString()}
            spy={true}
            smooth={true}
            offset={-100}
            duration={450}
            activeClass={styles.active + ' __active__'}
            onSetActive={setActiveHandler}
            onSetInactive={setInactiveHandler}
          >
            {category}
          </Scroll.Link>
        ))}
      </ScrollContainer>
      <div>
        {pathname !== '/cart' && (
          <Link to='/cart' onClick={(e) => onCLickCheck(e)}>
            <Button>
              КОРЗИНА
              {amountProducts > 0 && <span>| {amountProducts}</span>}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
