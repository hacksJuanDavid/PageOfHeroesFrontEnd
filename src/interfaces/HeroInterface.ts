// Interface for Heroe
export interface Hero {
    id: number;
    name: string;
    powers: string[];
    characteristics: {
        gender: string;
        origin: string;
        universe: string;
    }
    history : string;
    images: string[];
}

