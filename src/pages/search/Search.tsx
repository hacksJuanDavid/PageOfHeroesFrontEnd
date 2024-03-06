import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { SearchHero } from '../../components/heroes/SearchHero';

export default function Search() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SearchHero />
      </IonContent>
    </IonPage>
  );
};

