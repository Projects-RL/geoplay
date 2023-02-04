import React from 'react';
import Head from 'next/head';
import style from '../styles/Home.module.css';
import MenuButtons from '../components/MenuButtons';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks/hooks';
import SideMenu from '../components/SideMenu';

const Home = () => {
  const showSideMenu = useAppSelector((state: RootState) => {
    return state.componentHandling.showSideMenu;
  });

  return (
    <>
      <Head>
        <title>GeoPlay</title>
        <meta name="description" content="Test you geography skills" />
      </Head>

      <div className={style.container}>
        {showSideMenu && <SideMenu page="Home" />}
        <section className={style.header}>
          <h1>
            <span role="heading" aria-level={1}>
              Geo
            </span>
            <span role="heading" aria-level={1}>
              Play
            </span>
          </h1>
        </section>
        <MenuButtons />
      </div>
    </>
  );
};

export default Home;
