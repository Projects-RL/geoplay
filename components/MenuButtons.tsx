import React, { useState, MouseEvent } from "react";
import style from "../styles/MenuButtons.module.css";
import SmallMenu from "./SmallMenu";

function MenuButtons() {
    const [activeBtn, setActiveBtn] = useState<string>("");

    function handleActiveBtn(e: MouseEvent<HTMLButtonElement>) {
        setActiveBtn(e.currentTarget.innerText);
        if (activeBtn === "Play") {
            setActiveBtn("");
        }
    }
    return (
        <section className={style.mainMenuBtns}>
            <button
                onClick={handleActiveBtn}
                className={
                    activeBtn === "Play"
                        ? `${style.active} ${style.menuBtn}`
                        : `${style.menuBtn}`
                }
            >
                Play
            </button>
            {activeBtn === "Play" && <SmallMenu />}
            <button className={style.menuBtn} onClick={handleActiveBtn}>
                Leaderboards
            </button>
            <button className={style.menuBtn} onClick={handleActiveBtn}>
                Info
            </button>
        </section>
    );
}

export default MenuButtons;
