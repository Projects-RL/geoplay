import React from "react";
import style from "../styles/Objective.module.css";

function Objective({ objective }: { objective: string }) {
  return <div className={style.container}>{objective}</div>;
}

export default Objective;
