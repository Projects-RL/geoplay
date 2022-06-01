import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./index.module.css";

function GamePage() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MB_ACCESS_TOKEN,
            container: mapContainer.current!,
            style: "mapbox://styles/tjorben/cl3t89ay5000615knxkcvfr67",
        });
    }, []);
    return <div ref={mapContainer} className={styles.container}></div>;
}

export default GamePage;
