import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonCardHeader } from '@ionic/react';
import { Pagination } from 'swiper/modules';
import { HeroesService } from '../../api/HeroesService';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "../../styles/CarouselPowersHeroes.css"

// Function to get all the heroes
function getHeroes() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();
    // Get all the heroes
    const heroes = heroesService.getHeroes();
    // Return the heroes
    return heroes;
}

export function CarouselPowersHeroes() {
    return (
        <>
            <IonCard className="ion-padding card-carousel-powers-hero">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1100: {
                            slidesPerView: 4,
                        },
                        1300: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 5,
                        }
                    }}
                    modules={[Pagination]}
                >
                    {getHeroes().map((hero) => (
                        <SwiperSlide key={hero.id}>
                            <IonCard className="slide-card-powers-heroes" style={
                                {
                                    backgroundImage: `url(${hero.images[0]})`,
                                }
                            }>
                                <h1 className="ion-text-center ion-padding">{hero.name}</h1>
                                <p>
                                    {hero.powers.map((power) => (
                                        <ul>
                                            <li>{power}</li>
                                        </ul>
                                    ))}
                                </p>
                            </IonCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </IonCard>
        </>
    );
}