import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';

import '../TopRatedMovies/TopRatedMovies.css';


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
        <div className='topRated_container'>
            <p className='title'>Top Rated Movies</p>
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
    </div>
  )
}

export default TopRatedMovies