import { FC } from 'react';

import { Header } from '../header';
import { Body } from '../body';
import { Footer } from '../footer';
import './app.scss';

export const App: FC = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
