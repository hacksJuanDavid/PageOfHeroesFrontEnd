import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonRow, IonSearchbar } from "@ionic/react";
import { useState } from "react";
import { Hero } from "../../interfaces/HeroInterface";
import { HeroesService } from "../../api/HeroesService";
import { search } from "ionicons/icons";
import "../../styles/SearchHero.css";

export function SearchHero() {
    // Service to manage the heroes
    const heroesService = new HeroesService();

    // State for the search bar and Hero
    const [searchName, setSearchName] = useState('');
    const [hero, setHero] = useState<[]>() as Hero[] | any;

    // Function get the search text
    const handleSearch = (e: any) => {
        // Set the search text
        setSearchName(e.detail.value);
    }

    // Function to search the hero
    const searchHero = () => {
        // Get the hero by name
        const findHero = heroesService.getHeroBySearchName(searchName);

        // Set the hero
        setHero(findHero);

    }

    console.log(hero);

    return (
        <div>
            <IonCard>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="10">
                                <IonSearchbar
                                    className="ion-margin"
                                    animated={true}
                                    placeholder="Batman"
                                    onIonChange={handleSearch}
                                >
                                </IonSearchbar>
                            </IonCol>
                            <IonCol>
                                <IonButton
                                    className="search-button-hero"
                                    expand="block"
                                    onClick={searchHero}
                                >
                                    <IonIcon icon={search} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

            {/* View result hero */}
            <IonCard>
                <IonCardContent>
                    {hero ? hero.map((hero: Hero) => (
                        <div key={hero.id}>
                            <IonCard className="ion-padding">
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="12" sizeMd="6">
                                            <img className="img-card-detail-hero" alt={`${hero.name}`} src={hero.images[0]} />
                                        </IonCol>
                                        <IonCol size="12" sizeMd="6">
                                            <IonCardHeader>
                                                <h1>{hero.name}</h1>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <h1>History</h1>
                                                <p>{hero.history}</p>
                                                <h1>Powers</h1>
                                                <ul>
                                                    {hero.powers.map((power, index) => (
                                                        <li key={index}>{power}</li>
                                                    ))}
                                                </ul>
                                                <h1>Characteristics</h1>
                                                <ul>
                                                    <li>Gender: {hero.characteristics.gender}</li>
                                                    <li>Origin: {hero.characteristics.origin}</li>
                                                    <li>Universe: {hero.characteristics.universe}</li>
                                                </ul>
                                                <IonCol>
                                                    <div className="ion-text-left">
                                                        <IonButton href={`/heroes`} color="danger" >Back</IonButton>
                                                        <IonButton href={`/heroes/gallery/hero/${hero.id}`} color="tertiary" >Gallery</IonButton>
                                                    </div>
                                                </IonCol>
                                            </IonCardContent>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </div>
                    )) :
                        <div>
                            <h1>Hero not found</h1>
                        </div>
                    }
                </IonCardContent>
            </IonCard>
        </div>
    )
}