import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { HeroesService } from "../../api/HeroesService";
import { useEffect, useState } from "react";
import { Hero } from "../../interfaces/HeroInterface";

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

export function GalleryHero() {
    // State to store the hero
    const [hero, setHero] = useState<Hero>({} as Hero);
    
    // UseEffect to get the hero
    useEffect(() => {
        const fetchHero = async () => {
            const fetchedHero = await getHeroById();
            setHero(fetchedHero);
        }

        fetchHero();
    }, []);

    console.log(hero);
    
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
                        {hero.images && hero.images.map((image, index) => (
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