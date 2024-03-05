// import data with the heroes from the json file
import DataHeroesJSON from "../../data/DataHeroes.json";
import { Hero } from "../interfaces/HeroInterface";

// Class to manage the heroes
export class HeroesService {
    // Method to get all the heroes
    public getHeroes(): Hero[] {
        return DataHeroesJSON;
    }

    // Method to get a hero by id
    public getHeroById(id: number): Hero {
        return DataHeroesJSON.find(hero => hero.id === id) as Hero;
    }

    // Method to get a hero by name
    public getHeroByName(name: string): Hero {
        return DataHeroesJSON.find(hero => hero.name === name) as Hero;
    }
}



