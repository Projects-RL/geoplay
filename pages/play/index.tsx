import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./index.module.css";
import naJSON from "../../geojson/NA.geo.json";
import MyApp from "../_app";

function GamePage() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [clickedCountries, setClickedCountries] = useState<String[]>([]);
    const [bajs, setBajs] = useState(true);
    const [countriesList, setCountriesList] = useState<String[]>([]);
    const [answer, setAnswer] = useState("");
    let hoveredCountryId: any = null;

    function populateCountries() {
        const countries = naJSON.features.map((country) => {
            return country.properties.name;
        });
        setCountriesList(countries);
    }

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MB_ACCESS_TOKEN,
            container: mapContainer.current!,
            style: "mapbox://styles/tjorben/cl3t89ay5000615knxkcvfr67",
        });

        map.current.on("load", () => {
            map.current?.addSource("countries", {
                type: "geojson",
                data: naJSON as any,
                generateId: true,
            });

            // Whn the style has loaded, this code will run
            map.current?.on("styledata", () => {
                // here we check if the layer already exists we cancel the function
                if (map.current?.getLayer("country-fills")) return;
                map.current?.addLayer({
                    id: "country-fills",
                    type: "fill",
                    source: "countries",
                    layout: {},
                    paint: {
                        "fill-color": [
                            "case",
                            ["==", ["feature-state", "answer"], "correct"], // if correct == true
                            "#04ff86", // ...then color the polygon this color
                            ["==", ["feature-state", "answer"], "incorrect"], // if correct == false
                            "#e51b0e", // ...then color the polygon this color
                            ["==", ["feature-state", "answer"], "changeBack"], // if turnBack == true
                            "#000", // ...then color the polygon black
                            ["==", ["feature-state", "hover"], true], // if the polygon is being hovered over
                            "#fff", // ...then color the polygon white
                            "#000", // this is the fallback value if neither of the cases above happens
                        ],
                        "fill-opacity": 0.5,
                    },
                });

                map.current?.addLayer({
                    id: "borders",
                    type: "line",
                    source: "countries",
                    layout: {},
                    paint: {
                        "line-color": "#ECA400",
                        "line-width": 2,
                    },
                });
            });
        });
        map.current?.on("mousemove", "country-fills", (e: any) => {
            if (e.features.length > 0) {
                if (hoveredCountryId) {
                    map.current?.setFeatureState(
                        { source: "countries", id: hoveredCountryId },
                        { hover: false }
                    );
                }
                hoveredCountryId = e.features[0].id;
                map.current?.setFeatureState(
                    { source: "countries", id: hoveredCountryId },
                    { hover: true }
                );
            }
        });
        map.current?.on("mouseleave", "country-fills", () => {
            if (hoveredCountryId !== null) {
                map.current?.setFeatureState(
                    { source: "countries", id: hoveredCountryId },
                    { hover: false }
                );
            }
            hoveredCountryId = null;
        });
        map.current.on("click", "country-fills", (e: any) => {
            if (!countriesList) return;

            const countryID = e.features[0].id;
            const countryName = e.features[0].properties.name;

            const countryObj = {
                countryID,
                countryName,
            };
            setClickedCountries((prevValue: any) => {
                return [...prevValue, countryObj];
            });
        });
        populateCountries();
    }, []);

    if (map.current) {
    }

    useEffect(() => {
        const index = clickedCountries.length;
        const pickedCountry: any = clickedCountries[index - 1];
        const correctCountry = countriesList[index - 1];

        if (!pickedCountry) return;
        if (pickedCountry.countryName === correctCountry) {
            setAnswer("correct");
        } else {
            setAnswer("incorrect");
            setTimeout(() => {
                setAnswer("changeBack");
            }, 1000);
        }
    }, [clickedCountries]);

    useEffect(() => {
        const index = clickedCountries.length;
        const pickedCountry: any = clickedCountries[index - 1];
        if (answer === "correct") {
            map.current?.setFeatureState(
                { source: "countries", id: pickedCountry.countryID },
                {
                    answer: answer,
                }
            );
        }
        if (answer === "incorrect") {
            map.current?.setFeatureState(
                { source: "countries", id: pickedCountry.countryID },
                {
                    answer: answer,
                }
            );
        }
        if (answer === "changeBack") {
            map.current?.setFeatureState(
                { source: "countries", id: pickedCountry.countryID },
                {
                    answer: answer,
                }
            );
        }
        setAnswer("");
    }, [answer]);

    return <div ref={mapContainer} className={styles.container}></div>;
}

export default GamePage;
