import React from "react";
import style from "../styles/ReadyUp.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {
    setPlayerHasClickedReady: (playerHasClickedReady: boolean) => void;
    setCountdownStarted: (countdownStarted: boolean) => void;
}

function ReadyUp({ setPlayerHasClickedReady, setCountdownStarted }: Props) {
    const continent = useSelector((state: RootState) => {
        return state.gameOptions.continent;
    });

    function handleStart() {
        setPlayerHasClickedReady(true);
        setCountdownStarted(true);
    }

    return (
        <div className={style.container}>
            <h1>{continent}</h1>
            <p>
                Click on the correct countries as quick as possible, you only
                have 1 chance per country.
            </p>
            <p>
                When Every country has been displayed the timer is stopped and
                your final score is calculated.
            </p>
            <p>When you are ready click on Start, Good luck!</p>
            <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default ReadyUp;
