import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import { HeroesService } from "../../api/HeroesService";
import "../../styles/DetailHero.css";

export function DetailHero() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();

    // Get id from the url
    const id = Number(window.location.pathname.split("/").pop());

    // Get the hero by id
    const hero = heroesService.getHeroById(id);

    return (
        <div>
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
    )
}