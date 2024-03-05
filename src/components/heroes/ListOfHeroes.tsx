import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react";
import { HeroesService } from "../../api/HeroesService";
import { Hero } from "../../interfaces/HeroInterface";
import "../../styles/ListOfHeroes.css";

export function ListOfHeroes() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();
    // Get all the heroes
    const heroes = heroesService.getHeroes();

    return (
        <IonGrid>
            <IonRow>
                {heroes.map((hero: Hero) => (
                    <IonCol size="6" sizeMd="4" sizeLg="3" key={hero.id}>
                        <IonCard className="card-list-of-heroes">
                            <img alt={`${hero.name}`} src={hero.images[0]} />
                            <IonCardHeader>
                                <IonCardTitle>{hero.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <div className="ion-text-left">
                                    <IonButton href={`/heroes/detail/hero/${hero.id}`} color="warning" >Details</IonButton>
                                    <IonButton href={`/heroes/gallery/hero/${hero.id}`} color="tertiary" >Gallery</IonButton>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    )
}