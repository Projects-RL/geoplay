import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import style from "../styles/Home.module.css";
import MenuButtons from "../components/MenuButtons";
import { CgProfile } from "react-icons/cg";
import UserAuth from "../components/UserAuth";
import Overlay from "../components/Overlay";
import { RootState } from "../redux/store";
import { handleShowSignIn } from "../redux/features/componentHandlingSlice";
import { handleIsLoggedIn } from "../redux/features/userSlice";
import { supabase } from "../config/supabase";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

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

  function handleProfileButtonClick() {
    if (isLoggedIn || userIsLoggedIn) {
      console.log("signed in wee");
    } else {
      dispatch(handleShowSignIn(true));
    }
  }
  console.log(isLoggedIn, userIsLoggedIn);

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
        {showSignIn && <Overlay />}
        <section className={style.header}>
          <h1>
            <span role="heading">Geo</span>
            <span role="heading">Play</span>
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
