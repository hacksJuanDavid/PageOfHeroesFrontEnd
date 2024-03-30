// import data with the heroes from the json file
import { Hero } from "../interfaces/HeroInterface";

// Class to manage the heroes
export class HeroesService {
    // Data with the heroes
    private HeroApiUrl = "https://heroapi-h0cv.onrender.com/api/v1";

    // Constructor
    constructor() {
    }

    // Method to get all the heroes
    public async getHeroes(): Promise<Hero[]> {
        try {
            const response = await fetch(`${this.HeroApiUrl}/heroes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

    // Method to get a hero by id
    public async getHeroById(id: string): Promise<Hero> {
        try {
            const response = await fetch(`${this.HeroApiUrl}/heroes/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Method to get a hero by name
    public async getHeroBySearchName(searchName: string): Promise<Hero[]> {
        try {
            const response = await fetch(`${this.HeroApiUrl}/heroes/name/${searchName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
}



