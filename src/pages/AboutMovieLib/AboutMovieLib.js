import React from 'react';
import { Link } from 'react-router-dom';
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
          <p>Discover the API 
            <a href='https://developers.themoviedb.org/3/getting-started/introduction' target='_blank' rel="noreferrer"> here.</a>
          </p>
          <p>This project was made by web developer and designer</p>
          <p>
            <Link to='/about-developer'>Juliana Madeira</Link>
          </p>
        </div>
    </div>
  )
}

export default AboutMovieLib