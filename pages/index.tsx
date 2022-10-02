import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Home.module.css';
import MenuButtons from '../components/MenuButtons';
import { CgProfile } from 'react-icons/cg';
import UserAuth from '../components/UserAuth';
import Overlay from '../components/Overlay';
import { RootState } from '../redux/store';
import {
  handleShowSideMenu,
  handleShowSignIn,
} from '../redux/features/componentHandlingSlice';
import { handleIsLoggedIn } from '../redux/features/userSlice';
import { supabase } from '../config/supabase';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import SideMenu from '../components/SideMenu';

interface Props {
  isLoggedIn: boolean;
}

const Home: NextPage<Props> = ({ isLoggedIn }: Props) => {
  const dispatch = useAppDispatch();

  if (isLoggedIn) {
    dispatch(handleIsLoggedIn(true));
  }
  const showSignIn: boolean = useAppSelector((state: RootState) => {
    return state.componentHandling.showSignIn;
  });
  const userIsLoggedIn = useAppSelector((state: RootState) => {
    return state.userSlice.isLoggedIn;
  });
  const showSideMenu = useAppSelector((state: RootState) => {
    return state.componentHandling.showSideMenu;
  });

  function handleProfileButtonClick() {
    if (isLoggedIn || userIsLoggedIn) {
      dispatch(handleShowSideMenu(true));
    } else {
      dispatch(handleShowSignIn(true));
    }
  }

  return (
    <>
      <Head>
        <title>GeoPlay</title>
        <meta name="description" content="Test you geography skills" />
      </Head>

      <div className={style.container}>
        <button
          className={style.profileButton}
          onClick={() => handleProfileButtonClick()}
          data-testid="profileButton"
        >
          <CgProfile />
        </button>

        {showSignIn && <UserAuth />}
        {showSideMenu && <SideMenu />}
        {(showSignIn || showSideMenu) && <Overlay />}
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let isLoggedIn = false;

  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (user) isLoggedIn = true;

  return {
    props: {
      isLoggedIn,
    },
  };
};

export default Home;
