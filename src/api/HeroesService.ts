// import data with the heroes from the json file
import DataHeroesJSON from "../../data/DataHeroes.json";
import { Hero } from "../interfaces/HeroInterface";

// Class to manage the heroes
export class HeroesService {
    // Data with the heroes
    private dataHero = DataHeroesJSON;


    // Constructor
    constructor() {
        this.dataHero = DataHeroesJSON;
    }

    // Method to get all the heroes
    public getHeroes(): Hero[] {
        return this.dataHero;
    }

    // Method to get a hero by id
    public getHeroById(id: number): Hero {
        return this.dataHero.find(hero => hero.id === id) as Hero;
    }

    // Method to get a hero by name
    public getHeroBySearchName(searchName: string): Hero[] {
        // Normalize the search name
        const searchNameNormalized = searchName.trim().toLowerCase().replace(/[\s\-_]+/g, '');

        // Filter the heroes
        const foundHero = this.dataHero.filter(hero => {
            // Normalize the hero name
            const heroNameNormalized = hero.name.trim().toLowerCase().replace(/[\s\-_]+/g, '');

            // Return the hero if the name contains the search name
            return heroNameNormalized.includes(searchNameNormalized);
        }
        );

        // Return the hero
        return foundHero;
    }
}



