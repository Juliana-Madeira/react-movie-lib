import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
  const [movies, setMovies] = useState([]);
  
  const api_key = process.env.REACT_APP_WEATHER_API_KEY
  const image = process.env.REACT_APP_WEATHER_IMG
  
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
      {movies.map((movie) => {
        return (
          <div>
            <h1 key={movie.id}>{movie.original_title}</h1>
            <div><img src={image + movie.poster_path} alt="movieimage" /></div>
          </div>
        )
      })}
    </div>
  )
}

export default Home;