import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import style from "../styles/Home.module.css";
import MenuButtons from "../components/MenuButtons";
import { CgProfile } from "react-icons/cg";
import UserAuth from "../components/UserAuth";
import Overlay from "../components/Overlay";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { handleShowSignIn } from "../redux/features/componentHandlingSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const showSignIn: boolean = useSelector((state: RootState) => {
    return state.componentHandling.showSignIn;
  });

  function handleProfileButtonClick(bool: boolean) {
    dispatch(handleShowSignIn(bool));
  }

  return (
    <div className={style.container}>
      <Head>
        <title>GeoPlay</title>
        <meta name="description" content="Test you geography skills" />
      </Head>
      <button
        className={style.profileButton}
        onClick={() => handleProfileButtonClick(true)}
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
  );
};

export default Home;
