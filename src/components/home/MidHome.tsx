import { IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { CarouselHeroes } from "../heroes/CarouselHeroes";
import { CarouselPowersHeroes } from "../heroes/CarouselPowersHeroes";
import { CarouselHistoriesHeroes } from "../heroes/CarouselHistoriesHeroes";

export function MidHome() {
    return (
        <div>
            <IonCardHeader>
                <h1 className="ion-text-center">Heroes extraordinary</h1>
            </IonCardHeader>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeSm="12">
                            <h1 className="ion-text-center">Heroes</h1>
                            <CarouselHeroes />
                        </IonCol>
                        <IonCol sizeSm="12" sizeLg="6">
                            <h1 className="ion-text-center">Powers heroes</h1>
                            <CarouselPowersHeroes />
                        </IonCol>
                        <IonCol sizeSm="12" sizeLg="6">
                            <h1 className="ion-text-center">Histories</h1>
                            <CarouselHistoriesHeroes />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </div>
    )
}