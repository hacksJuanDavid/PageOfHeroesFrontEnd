import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import { HeroesService } from "../../api/HeroesService";
import { useEffect, useState } from "react";
import { Hero } from "../../interfaces/HeroInterface";
import "../../styles/DetailHero.css";

// Function to get hero by id
function getHeroById() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();

    // Get id from the url
    const id = String(window.location.pathname.split("/").pop());

    // Get the hero by id
    const hero = heroesService.getHeroById(id);
    // Return the hero
    return hero;
}

export function DetailHero() {
    // State to store the hero
    const [hero, setHero] = useState({} as Hero);

    // UseEffect to get the hero
    useEffect(() => {
        const fetchHero = async () => {
            const fetchedHero = await getHeroById();
            setHero(fetchedHero);
        }

        fetchHero();
    }, []);

    return (
        <div>
            <IonCard className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" sizeMd="6">
                            <img className="img-card-detail-hero" alt={`${hero.name}`} src={hero.images && hero.images.length > 0 ? hero.images[0] : ''} />
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
                                    {hero.power && hero.power.map((power, index) => (
                                        <li key={index}>{power}</li>
                                    ))}
                                </ul>
                                <h1>Characteristics</h1>
                                <ul>
                                    <li>Gender: {hero.characteristics && hero.characteristics.gender}</li>
                                    <li>Origin: {hero.characteristics && hero.characteristics.origin}</li>
                                    <li>Universe: {hero.characteristics && hero.characteristics.universe}</li>
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
    )
}