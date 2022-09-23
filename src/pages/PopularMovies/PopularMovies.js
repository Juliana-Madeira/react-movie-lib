import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);  

  const api_key = process.env.REACT_APP_WEATHER_API_KEY

  const getAllPopularMovies = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      setMovies(data.results);
      console.log(data.results)
    } catch (error) {
      console.log('erro', error)
    }
  }

  useEffect(() => {
    getAllPopularMovies();
  }) 

  return (
    <div>
      <h2 className='title'>Popular Movies</h2>
      <div className='movie_container'>
        {movies.length === 0 && <p>Loading...</p>}
        {movies.map((movie) => {
          return (
            <div>
              <MovieCard movie={movie} key={movie.id}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PopularMovies