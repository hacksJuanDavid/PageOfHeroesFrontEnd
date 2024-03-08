import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, terminal, logoTwitter } from "ionicons/icons";

export function Footer() {
    return (
        <div>
            <IonCard color="tertiary">
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton
                                    expand="block"
                                    fill="clear"
                                    color="light"
                                    href="https://www.linkedin.com/in/juan-david-jimenez-7768a2222/"
                                    target="_blank"
                                >
                                    <IonIcon icon={logoLinkedin} size="large" />
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton
                                    expand="block"
                                    fill="clear"
                                    color="light"

                                    href="https://github.com/hacksJuanDavid?tab=overview&from=2024-03-01&to=2024-03-08"
                                    target="_blank"
                                >
                                    <IonIcon icon={logoGithub} size="large" />
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton
                                    expand="block"
                                    fill="clear"
                                    color="light"
                                    href="https://minimalist-portfolio-json-peach.vercel.app/"
                                    target="_blank"
                                >
                                    <IonIcon icon={terminal} size="large" />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

