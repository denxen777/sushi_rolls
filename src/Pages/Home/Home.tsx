import React from 'react';

import { Category } from '../../components/Category/Category';
import { Main } from '../../components/Main';
import { Modal } from "../../components/Modal/Modal";

export const Home: React.FC = () => {
  return (
    <div>
      <Modal />
      <Category />
      <Main />
    </div>
  );
};
