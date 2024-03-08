import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { planetOutline, searchOutline, readerOutline } from 'ionicons/icons';
import Heroes from './pages/heroes/Heroes';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ViewDetailsHero from './pages/heroes/ViewDetailsHero';
import ViewGalleryHero from './pages/heroes/ViewGalleryHero';

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/heroes">
              <Heroes />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/heroes/detail/hero/:id">
              <ViewDetailsHero />
            </Route>
            <Route exact path="/heroes/gallery/hero/:id">
              <ViewGalleryHero />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="heroes" href="/heroes">
              <IonIcon aria-hidden="true" icon={planetOutline} />
              <IonLabel>Page Heroes</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={readerOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon aria-hidden="true" icon={searchOutline} />
              <IonLabel>Search Hero</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};



