import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TopHome } from '../../components/home/TopHome';
import { MidHome } from '../../components/home/MidHome';
import { DownHome } from '../../components/home/DownHome';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TopHome />
        <MidHome />
        <DownHome />
      </IonContent>
    </IonPage>
  );
};


