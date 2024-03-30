import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard } from '@ionic/react';
import { Pagination } from 'swiper/modules';
import { HeroesService } from '../../api/HeroesService';
import { useEffect, useState } from 'react';
import { Hero } from '../../interfaces/HeroInterface';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "../../styles/CarouselHistoriesHeroes.css"

// Function to get all the heroes
function getHeroes() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();
    // Get all the heroes
    const heroes = heroesService.getHeroes();
    // Return the heroes
    return heroes;
}

export function CarouselHistoriesHeroes() {
    // State to store the heroes
    const [heroes, setHeroes] = useState<Hero[]>([]);

    // UseEffect to fetch the heroes
    useEffect(() => {
        const fetchHeroes = async () => {
            const fetchedHeroes = await getHeroes();
            setHeroes(fetchedHeroes);
        };

        fetchHeroes();
    }, []);

    return (
        <>
            <IonCard className="ion-padding card-carousel-histories-heroes">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
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
                    {heroes.map((hero) => (
                        <SwiperSlide key={hero.id}>
                            <IonCard className="slide-card-histories-heroes" color="warning">
                                <h1 className="ion-text-center ion-padding">{hero.name}</h1>
                                <p className="ion-padding text-card-histories-heroes">
                                    {hero.history}
                                </p>
                            </IonCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </IonCard>
        </>
    );
}
