import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { handleShowSignIn } from "../redux/features/componentHandlingSlice";
import style from "../styles/Overlay.module.css";

function Overlay() {
  const dispatch = useAppDispatch();
  function handleOnClick() {
    dispatch(handleShowSignIn(false));
  }

  return (
    <div
      data-testid="overlay"
      className={style.overlay}
      onClick={() => handleOnClick()}
    ></div>
  );
}

export default Overlay;
