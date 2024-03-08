import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonImg } from '@ionic/react';
import { Pagination } from 'swiper/modules';
import { HeroesService } from '../../api/HeroesService';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "../../styles/CarouselHeroes.css"

// Function to get all the heroes
function getHeroes() {
    // Create a new instance of the HeroesService class
    const heroesService = new HeroesService();
    // Get all the heroes
    const heroes = heroesService.getHeroes();
    // Return the heroes
    return heroes;
}

export function CarouselHeroes() {
    return (
        <>
            <IonCard className="ion-padding card-carousel-hero">
                <Swiper
                    slidesPerView={3}
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
                    {getHeroes().map((hero) => (
                        <SwiperSlide key={hero.id}>
                            <IonImg src={hero.images[0]} alt={hero.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </IonCard>
        </>
    );
}