import React, { useEffect, useRef, useState } from "react";
import style from "../styles/Countdown.module.css";

interface Props {
    setCountdownStarted: (countdownStarted: boolean) => void;
    setGameStarted: (gameStarted: boolean) => void;
}

function Countdown({ setCountdownStarted, setGameStarted }: Props) {
    const countState: string[] = ["3", "2", "1", "GO!"];
    const [iteration, setIteration] = useState<number>(0);
    const shouldCountdown = useRef<boolean>(true);

    useEffect(() => {
        if (shouldCountdown.current) {
            startCountdown();
            shouldCountdown.current = false;
        }
    }, []);

    function startCountdown() {
        const myInterval = setInterval(() => {
            setIteration((prevValue) => {
                if (prevValue >= 3) {
                    clearInterval(myInterval);
                    setCountdownStarted(false);
                    setGameStarted(true);
                    return 3;
                }
                return prevValue + 1;
            });
        }, 1000);
    }

    return (
        <section className={style.container}>
            <p>{countState[iteration]}</p>
        </section>
    );
}

export default Countdown;
