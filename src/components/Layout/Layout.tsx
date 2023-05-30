import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout: React.FC = () => {
  return (
    <div className='wrap'>
      <div className='inner'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
