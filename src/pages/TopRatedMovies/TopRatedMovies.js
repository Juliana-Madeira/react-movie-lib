import React, { useState } from 'react';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';


const TopRatedMovies = () => {
    const [topMovies, setTopMovies] = useState([]);

    const api_key = process.env.REACT_APP_WEATHER_API_KEY

    const getAllTopRatedMovies = async () => {
        try {
            const { data } = await axios.get()
            setTopMovies(data)
        } catch (error) {
            console.log('erro', error)
        }
    }

  

  return (
    <div>
      <h2 className='title'>Top Rated Movies</h2>
      <div className='movie_container'>
        {/* {movies.length === 0 && <p>Loading...</p>} */}
        {/* {movies.map((movie) => {
          return (
            <div>
              <MovieCard movie={movie} key={movie.id}/>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default TopRatedMovies