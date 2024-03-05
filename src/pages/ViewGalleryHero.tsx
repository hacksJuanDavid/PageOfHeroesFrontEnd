import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { GalleryHero } from "../components/heroes/GalleryHero";

export default function ViewGalleryHero() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>View Gallery Hero</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <GalleryHero />
            </IonContent>
        </IonPage>
    )
}