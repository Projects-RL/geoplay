import React from "react";
import { Coords } from "../interfaces";
import style from "../styles/SmallMenuDropdown.module.css";
import { ContinentState } from "../types";

interface Props {
  continents: ContinentState[];
  handleChosenCountry: (name: string, coords: Coords, zoom: number) => void;
}

function SmallMenuDropdown({ continents, handleChosenCountry }: Props) {
  return (
    <div className={style.dropdown}>
      {continents.map((continent) => {
        return (
          <button
            key={continent.name}
            className={style.countryChoice}
            onClick={() =>
              handleChosenCountry(
                continent.name,
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
  );
}

export default SmallMenuDropdown;
