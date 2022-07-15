import React from "react";
import style from "../styles/Objective.module.css";

function Objective({ objective }: { objective: String }) {
    return <div className={style.container}>{objective}</div>;
}

export default Objective;
