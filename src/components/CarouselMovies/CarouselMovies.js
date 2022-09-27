import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';


import singin_rain from  '../../assets/images/singin_rain.png';
import leiDaNoite from '../../assets/images/leidanoite.jpg';
import pulpFiction from '../../assets/images/pulp-fiction.jpg';
import legadoMarvel from '../../assets/images/llegadomarvel.jpg';
import starWars from '../../assets/images/starwars.png';

const CarouselMovies = () => {
  return (
    <div>
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={4000} 
            stopOnHover={true} 
            transitionTime={2000}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
        >
            <div>
                <img src={singin_rain} alt='singinrain' />
            </div>
            <div>
                <img src={pulpFiction} alt="pulpfitction" />
            </div>
            <div>
                <img src={leiDaNoite} alt="leiDaNoite" />
            </div>
            <div>
                <img src={legadoMarvel} alt="legadoMarvel" />
            </div>
            <div>
                <img src={starWars} alt="poderosoChefao" />
            </div>
        </Carousel>
    </div>
  )
}

export default CarouselMovies;