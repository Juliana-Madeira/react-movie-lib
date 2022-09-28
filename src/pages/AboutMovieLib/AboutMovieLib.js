import React from 'react';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';

import '../AboutMovieLib/AboutMovieLib.css';

const AboutMovieLib = () => {
  return (
    <div className='about'>
        <ButtonsGroup/>
        <p className='title'>About MovieLib</p>
        <div className='text_container'>
          <p>The MovieLib app was all created in React.js, styled with CSS3.</p>
          <p>Requests were made to the TMDB API, an API with information about movies, people and much more.</p>
          <p>For these requests, the axios library was used.</p>
          <p>Discover the API used here https://developers.themoviedb.org/3/getting-started/introduction</p>
          <p>This project was made by web developer and designer Juliana Madeira</p>
        </div>
    </div>
  )
}

export default AboutMovieLib