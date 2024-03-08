import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow } from "@ionic/react";
import "../../styles/TopHome.css";

export function TopHome() {
    return (
        <div>
            <>
                {/* Hero home */}
                <IonCard className="card-top-home ion-padding">
                    <IonCardHeader>
                        <IonCardTitle className="card-top-title-home ion-text-center">Heros of universe</IonCardTitle>
                    </IonCardHeader>
                    {/* Add more content or components for your hero section */}
                </IonCard>
            </>
        </div>
    )
}
