export interface Coords {
    lat: number;
    lng: number;
}

export interface GameOptions {
    continent: string;
    gameMode: string;
    ready: boolean;
    coordinates: Coords;
    zoom: number;
}

export interface Continent {
    name: string;
    coords: Coords;
    zoom: number;
}
