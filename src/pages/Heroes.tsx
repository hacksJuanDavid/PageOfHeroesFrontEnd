import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ListOfHeroes } from '../components/heroes/ListOfHeroes';

export default function Heroes() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Heroes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Heroes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListOfHeroes />
      </IonContent>
    </IonPage>
  );
};


