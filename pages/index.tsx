import type { NextPage } from "next";
import Head from "next/head";
import style from "../styles/Home.module.css";
import MenuButtons from "../components/MenuButtons";

const Home: NextPage = () => {
    return (
        <div className={style.container}>
            <Head>
                <title>GeoPlay</title>
                <meta name="description" content="Test you geography skills" />
            </Head>
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
