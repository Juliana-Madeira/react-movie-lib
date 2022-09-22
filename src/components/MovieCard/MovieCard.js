import React from 'react';
import {FaStar} from 'react-icons/fa';

import '../MovieCard/MovieCard.css'; 

const image = process.env.REACT_APP_WEATHER_IMG;

const MovieCard = ({movie}) => {
  return (
    <div className='movie_card'>
        <img src={image + movie.poster_path} alt={movie.original_title} />
        <h2>{movie.original_title}</h2>
        <p><FaStar/>{movie.vote_average}</p>
    </div>
  )
}

export default MovieCard