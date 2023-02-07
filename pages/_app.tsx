import React, { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../redux/store';

const store = configureStore({
  reducer: rootReducer,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isDesktop, setIsDesktop] = useState(true);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 912) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    });
  }

  if (!isDesktop) {
    return (
      <div className="alertContainer">
        <p className="alert">
          Sorry, this game is not compatible with any screen smaller than a
          laptop
        </p>
      </div>
    );
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
