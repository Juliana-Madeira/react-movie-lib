import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import singin_rain from  '../../assets/images/singin_rain.png';
import leiDaNoite from '../../assets/images/leidanoite.jpg';
import pulpFiction from '../../assets/images/pulp-fiction.jpg';
import legadoMarvel from '../../assets/images/llegadomarvel.jpg';
import poderosoChefao from '../../assets/images/poderosochefao.png';

const CarouselBrands = () => {

    const data = [
        {
          image: singin_rain
        },
        {
          image: leiDaNoite
        },
        {
          image: pulpFiction
        },
        {
          image: legadoMarvel
        },
        {
          image: poderosoChefao
        }
    ]

  return (
    <div>
        {/* <div style={{ textAlign: "center" }}> */}
       
       {/* <div style={{
         padding: "0 20px"
       }}> */}
         <Carousel
           data={data}
           time={3000}
           width="1600px"
           height="300px"
           radius="5px"
           slideNumber={false}
           captionPosition="bottom"
           automatic={true}
           dots={true}
           pauseIconColor="white"
           pauseIconSize="40px"
           slideBackgroundColor="black"
           slideImageFit="cover"
           thumbnails={false}
           thumbnailWidth="100px"
           style={{
             textAlign: "contain",
             maxWidth: "1600px",
             maxHeight: "300px",
             margin: "40px auto"
           }}
         />
       {/* </div> */}
     {/* </div> */}
    </div>
  )
}

export default CarouselBrands;