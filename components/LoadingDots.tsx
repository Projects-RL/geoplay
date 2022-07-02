import React from "react";
import style from "../styles/LoadingDots.module.css";

function LoadingDots() {
    return (
        <img
            src="./loadingDots.svg"
            alt="loading animation"
            className={style.loadingIcon}
        />
    );
}

export default LoadingDots;
