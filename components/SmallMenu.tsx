import React, { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
    continentPick,
    gameModePick,
    handleCoords,
    handleReady,
    handleZoom,
} from "../redux/features/gameOptionsSlice";
import style from "../styles/SmallMenu.module.css";
import { AiFillCaretUp } from "react-icons/ai";
import { Coords } from "../interfaces";
import { continents } from "../continents";

function SmallMenu() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputClick, setInputClick] = useState<boolean>(false);
    const [chosenCountry, setChosenCountry] = useState<string>("Europe");
    const [countriesToggled, setCountriesToggled] = useState<boolean>(true);

    function handleInputClick() {
        setInputClick((prevValue) => {
            return !prevValue;
        });
    }

    function handleChosenCountry(
        e: MouseEvent<HTMLButtonElement>,
        coords: Coords,
        zoom: number
    ) {
        const btnElement = e.target as HTMLButtonElement;
        setChosenCountry(btnElement.innerText);
        setInputClick(false);

        const stateToStore = btnElement.innerText
            .toLocaleLowerCase()
            .replace(" ", "");

        dispatch(continentPick(stateToStore));
        dispatch(handleCoords(coords));
        dispatch(handleZoom(zoom));
    }

    function goToPlayPage() {
        dispatch(handleReady(true));

        router.push("/" + chosenCountry.toLowerCase().replace(" ", ""));
    }

    return (
        <div className={style.container}>
            <div className={style.customInput} onClick={handleInputClick}>
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
                <div className={style.dropdown}>
                    {continents.map((continent) => {
                        return (
                            <button
                                key={continent.name}
                                className={style.countryChoice}
                                onClick={(e) =>
                                    handleChosenCountry(
                                        e,
                                        continent.coords,
                                        continent.zoom
                                    )
                                }
                            >
                                {continent.name}
                            </button>
                        );
                    })}
                </div>
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
                Ready
            </button>
        </div>
    );
}

export default SmallMenu;
