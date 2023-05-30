import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './Pages/Home/Home';

const Cart = React.lazy(() => import('./Pages/Cart/Cart'));
const NotFound = React.lazy(() => import('./Pages/NotFound/NotFound'));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={':categoryId?'} element={<Home />} />
        <Route
          path={'cart'}
          element={
            <Suspense>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path={'*'}
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
