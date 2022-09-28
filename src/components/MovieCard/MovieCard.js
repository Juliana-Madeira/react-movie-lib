import React from 'react';
import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../MovieCard/MovieCard.css'; 

const image = process.env.REACT_APP_WEATHER_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie_card'>
        <img src={image + movie.poster_path} alt={movie.original_title} />
        <h2>{movie.original_title}</h2>
        <p><FaStar/>{movie.vote_average}</p>
        {showLink && <Link to={`/movie/${movie.id}`}>Movie Details</Link>}
    </div>
  )
}

export default MovieCard