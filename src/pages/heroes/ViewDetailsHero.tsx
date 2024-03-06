import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { DetailHero } from "../../components/heroes/DetailHero";

export default function ViewDetailsHero() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>View Detail Hero</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <DetailHero />
            </IonContent>
        </IonPage>
    )
}