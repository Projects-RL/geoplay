import React, { useState, useEffect } from "react";
import style from "../styles/GameInfo.module.css";

interface Props {
    correctCountries: String[];
    countriesList: String[];
    gameIsOver: boolean;
}

function GameInfo({ correctCountries, countriesList, gameIsOver }: Props) {
    const [time, setTime] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);

    useEffect(() => {
        if (timerOn) return;
        setTimerOn(true);
    }, []);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    return prevTime + 10;
                });
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    if (gameIsOver) {
        setTimerOn(false);
    }

    return (
        <section className={style.container}>
            <div className={style.correctAnswers}>
                <span>{correctCountries.length}</span>
                <span className={style.slash}>/</span>
                <span>{countriesList.length}</span>
            </div>
            <div className={style.divider}></div>
            <div className={style.timer}>
                <span className={style.number}>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                </span>
                <span className={style.colon}>:</span>
                <span className={style.number}>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
                <span className={style.colon}>:</span>
                <span className={style.number}>
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
        </section>
    );
}

export default GameInfo;
