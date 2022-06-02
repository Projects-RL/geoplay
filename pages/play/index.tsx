import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./index.module.css";
import naJSON from "../../geojson/NA.geo.json";

function GamePage() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [clickedCountries, setClickedCountries] = useState<String[]>([]);
    let hoveredCountryId: any = null;

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MB_ACCESS_TOKEN,
            container: mapContainer.current!,
            style: "mapbox://styles/tjorben/cl3t89ay5000615knxkcvfr67",
        });

        map.current.on("load", () => {
            console.log(map.current?.isStyleLoaded());
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
                        // "fill-color": "#000",
                        "fill-color": [
                            "case",
                            // ["boolean", ["feature-state", "clicked"]],
                            // "#04ff86",
                            ["boolean", ["feature-state", "hover"], false],
                            "#fff",
                            "#000",
                        ],
                        "fill-opacity": 0.5,
                    },
                });

                // if(clicked && answer){
                //     color: 'green'
                // } else if(clicked && !answer){
                //     color: 'red'
                // } else if(!clicked) {
                // color: 'nothing'
                // }

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

                map.current?.on("click", "country-fills", pickCountry);
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
    }, []);

    function pickCountry(e: any) {
        console.log(e.features[0].properties.name);
        const countryID = e.features[0].id;
        const countryName = e.features[0].properties.name;

        map.current?.setFeatureState(
            { source: "countries", id: countryID },
            {
                clicked: true,
            }
        );

        const countryObj = {
            countryID,
            countryName,
        };
        setClickedCountries((prevValue: any) => {
            return [...prevValue, countryObj];
        });
    }

    return <div ref={mapContainer} className={styles.container}></div>;
}

export default GamePage;
