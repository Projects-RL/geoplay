import { useState, MouseEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import style from "../styles/Home.module.css";
import SmallMenu from "../components/SmallMenu";

const Home: NextPage = () => {
    const [activeBtn, setActiveBtn] = useState<string>("");

    function handleActiveBtn(e: MouseEvent<HTMLButtonElement>) {
        setActiveBtn(e.currentTarget.innerText);
        if (activeBtn === "Play") {
            setActiveBtn("");
        }
    }

    return (
        <div className={style.container}>
            <Head>
                <title>GeoPlay</title>
                <meta name="description" content="Test you geography skills" />
            </Head>
            <section className={style.header}>
                <h1>
                    <span>Geo</span>
                    <span>Play</span>
                </h1>
            </section>
            <section className={style.mainMenuBtns}>
                {/* <Link href="/play"> */}
                <button
                    onClick={handleActiveBtn}
                    className={activeBtn === "Play" ? `${style.active}` : ""}
                >
                    Play
                </button>
                {/* </Link> */}
                {activeBtn === "Play" && (
                    <SmallMenu />
                    // <div>
                    //     <div>Europe</div>
                    //     <div>
                    //         <button>Countries</button>
                    //         <button>Capitals</button>
                    //     </div>
                    //     <button>Ready</button>
                    // </div>
                )}
                <button onClick={handleActiveBtn}>Leaderboards</button>
                <button onClick={handleActiveBtn}>Info</button>
            </section>
        </div>
    );
};

export default Home;
