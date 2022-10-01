import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  continentPick,
  handleCoords,
  handleReady,
  handleZoom,
} from "../redux/features/gameOptionsSlice";
import style from "../styles/SmallMenu.module.css";
import { AiFillCaretUp } from "react-icons/ai";
import { Coords } from "../interfaces";
import { continents } from "../continents";
import LoadingDots from "./LoadingDots";
import SmallMenuDropdown from "./SmallMenuDropdown";
import { useAppDispatch } from "../hooks/hooks";

function SmallMenu() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [inputClick, setInputClick] = useState<boolean>(false);
  const [chosenCountry, setChosenCountry] = useState<string>("Europe");
  const [countriesToggled, setCountriesToggled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleInputClick() {
    setInputClick((prevValue) => {
      return !prevValue;
    });
  }

  function handleChosenCountry(name: string, coords: Coords, zoom: number) {
    setChosenCountry(name);
    setInputClick(false);

    // const stateToStore = name.toLocaleLowerCase().replace(" ", "");

    // dispatch(continentPick(stateToStore));
    dispatch(continentPick(name));
    dispatch(handleCoords(coords));
    dispatch(handleZoom(zoom));
  }

  async function goToPlayPage() {
    setIsLoading(true);
    dispatch(handleReady(true));
    await router.push("/" + chosenCountry.toLowerCase().replace(" ", ""));
  }

  return (
    <div className={style.container}>
      <div
        className={style.customInput}
        onClick={handleInputClick}
        data-testid="inputDiv"
      >
        <p>{chosenCountry}</p>
        <AiFillCaretUp
          className={
            inputClick
              ? `${style.arrowIcon} ${style.iconSpin}`
              : `${style.arrowIcon} `
          }
        />
      </div>
      {inputClick && (
        <SmallMenuDropdown
          continents={continents}
          handleChosenCountry={handleChosenCountry}
        />
      )}
      {inputClick && (
        <div
          className={style.closer}
          onClick={() => {
            setInputClick(false);
          }}
        ></div>
      )}

      <div className={style.toggleBtns}>
        <button
          className={countriesToggled ? `${style.toggled}` : ""}
          onClick={() => {
            setCountriesToggled(true);
          }}
        >
          Countries
        </button>
        <button
          className={!countriesToggled ? `${style.toggled}` : ""}
          onClick={() => {
            setCountriesToggled(false);
          }}
        >
          Capitals
        </button>
      </div>

      <button className={style.readyBtn} onClick={goToPlayPage}>
        {isLoading ? <LoadingDots /> : <>Ready</>}
      </button>
    </div>
  );
}

export default SmallMenu;
