import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { HeroesService } from "../../api/HeroesService";

export function GalleryHero() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();

    // Get id from the url
    const id = Number(window.location.pathname.split("/").pop());

    // Get the hero by id
    const hero = heroesService.getHeroById(id);

    return (
        <div>
            <IonCard className="gallery-card">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>{hero.name}</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        {hero.images.map((image, index) => (
                            <IonCol size="6" sizeMd="3" key={index}>
                                <div className="image-container">
                                    <img src={image} alt={`${hero.name} ${index + 1}`} />
                                </div>
                                <h3>{index + 1}</h3>
                            </IonCol>
                        ))}
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-left">
                                <IonButton href="/heroes" color="danger" >Back</IonButton>
                                <IonButton href={`/heroes/detail/hero/${hero.id}`} color="warning" >Details</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </div>
    )

}