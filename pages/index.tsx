import { useState, MouseEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [activeBtn, setActiveBtn] = useState<string>("");

    function handleActiveBtn(e: MouseEvent<HTMLButtonElement>) {
        setActiveBtn(e.currentTarget.innerText);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>GeoPlay</title>
                <meta name="description" content="Test you geography skills" />
            </Head>
            <section className={styles.header}>
                <h1>
                    <span>Geo</span>
                    <span>Play</span>
                </h1>
            </section>
            <section className={styles.mainMenuBtns}>
                <button
                    onClick={handleActiveBtn}
                    className={activeBtn === "Play" ? `${styles.active}` : ""}
                >
                    Play
                </button>
                {activeBtn === "play" && <></>}
                <button onClick={handleActiveBtn}>Leaderboards</button>
                <button onClick={handleActiveBtn}>Info</button>
            </section>
        </div>
    );
};

export default Home;
