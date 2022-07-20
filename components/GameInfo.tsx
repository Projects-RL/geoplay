import React from "react";
import style from "../styles/GameInfo.module.css";

interface Props {
    correctCountries: String[];
    countriesList: String[];
}

function GameInfo({ correctCountries, countriesList }: Props) {
    console.log(correctCountries.length);
    console.log(countriesList.length);

    return (
        <section className={style.container}>
            <div className={style.correctAnswers}>
                <span>{correctCountries.length}</span>
                <span className={style.slash}>/</span>
                <span>{countriesList.length}</span>
            </div>
            <div className={style.divider}></div>
            <div className={style.timer}>
                <span>00:00:00</span>
            </div>
        </section>
    );
}

export default GameInfo;
