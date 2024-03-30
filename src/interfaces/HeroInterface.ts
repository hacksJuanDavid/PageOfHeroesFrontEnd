// Interface for Heroe
export interface Hero {
    id: string;
    name: string;
    power: string[];
    characteristics: {
        gender: string;
        origin: string;
        universe: string;
    }
    history : string;
    images: string[];
}

