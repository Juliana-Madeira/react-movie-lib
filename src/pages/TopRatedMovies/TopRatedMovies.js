import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';


const TopRatedMovies = () => {
    const [movies, setMovies] = useState([]);

    const api_key = process.env.REACT_APP_WEATHER_API_KEY

    const getAllTopRatedMovies = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
            setMovies(data.results)
        } catch (error) {
            console.log('erro', error)
        }
    }

    useEffect(() => {
        getAllTopRatedMovies()
    }, [])

  

  return (
    <div>
        <ButtonsGroup/>
        <h2 className='title'>Top Rated Movies</h2>
        <div className='movie_container'>
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

export default TopRatedMovies