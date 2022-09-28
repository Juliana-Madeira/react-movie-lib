import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);  

  const api_key = process.env.REACT_APP_WEATHER_API_KEY

  const getAllPopularMovies = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      setMovies(data.results);
    } catch (error) {
      console.log('erro', error)
    }
  }

  useEffect(() => {
    getAllPopularMovies();
  }) 

  return (
    <div>
      <ButtonsGroup/>
      <p className='title'>Popular Movies</p>
      <div className='movies_container'>
        {movies.length === 0 && <p>Loading...</p>}
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PopularMovies