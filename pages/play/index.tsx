import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./index.module.css";
import naJSON from "../../geojson/NA.geo.json";
import { QuizData } from "../../types";

function GamePage() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [hoverId, setHoverId] = useState<any>(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MB_ACCESS_TOKEN,
            container: mapContainer.current!,
            style: "mapbox://styles/tjorben/cl3t89ay5000615knxkcvfr67",
        });

        map.current.on("load", () => {
            map.current?.addSource("custom-poly", {
                type: "geojson",
                data: naJSON as any,
                generateId: true,
            });
        });

        // map.current.on("data", onStyleData);
        // console.log("style is still loading...");
    }, []);

    if (map.current) {
        if (map.current.isStyleLoaded()) {
            map.current.addLayer({
                id: "country-fills",
                type: "fill",
                source: "custom-poly",
                layout: {},
                paint: {
                    "fill-color": "#627BC1",
                    "fill-opacity": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        1,
                        0.5,
                    ],
                },
            });
            map.current.addLayer({
                id: "borders",
                type: "line",
                source: "custom-poly",
                layout: {},
                paint: {
                    "line-color": "#000",
                    "line-width": 3,
                },
            });

            map.current.on("mousemove", "country-fills", (e: any) => {
                // console.log(e.features[0]);
                console.log(hoverId);

                if (e.features?.length > 0) {
                    if (hoverId !== null) {
                        map.current?.setFeatureState(
                            { source: "custom-poly", id: hoverId },
                            { hover: false }
                        );
                    }
                    setHoverId(e.features[0].id);
                    map.current?.setFeatureState(
                        { source: "custom-poly", id: hoverId },
                        { hover: true }
                    );
                }
            });

            map.current.on("mouseleave", "country-fills", () => {
                if (hoverId !== null) {
                    map.current?.setFeatureState(
                        { source: "custom-poly", id: hoverId },
                        { hover: false }
                    );
                }
                setHoverId(null);
            });
        }
    }
    return <div ref={mapContainer} className={styles.container}></div>;
}

export default GamePage;
