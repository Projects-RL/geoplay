import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
                <button>Play</button>
                <button>Leaderboards</button>
                <button>Info</button>
            </section>
        </div>
    );
};

export default Home;
