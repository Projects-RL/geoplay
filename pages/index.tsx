import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import style from "../styles/Home.module.css";
import MenuButtons from "../components/MenuButtons";
import { CgProfile } from "react-icons/cg";
import UserAuth from "../components/UserAuth";

const Home: NextPage = () => {
  const [showUserAuth, setShowUserAuth] = useState<boolean>(false);

  function handleProfileButtonClick(bool: boolean) {
    setShowUserAuth(bool);
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
      {showUserAuth && <UserAuth />}
      {showUserAuth && (
        <div
          className={style.overlay}
          onClick={() => handleProfileButtonClick(false)}
        ></div>
      )}
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
