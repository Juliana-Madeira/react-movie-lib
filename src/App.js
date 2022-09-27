import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SearchResults from './pages/SearchResults/SearchResults';
import PopularMovies from './pages/PopularMovies/PopularMovies';
import TopRatedMovies from './pages/TopRatedMovies/TopRatedMovies';
import People from './pages/People/People';
import AboutMovieLib from './pages/AboutMovieLib/AboutMovieLib';
import AboutDeveloper from './pages/AboutDeveloper/AboutDeveloper';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/top-rated-movies' element={<TopRatedMovies />} />
        <Route path='/popular-movies' element={<PopularMovies />} />
        <Route path='/people' element={<People />} />
        <Route path='/about-movie-lib' element={<AboutMovieLib />} />
        <Route path='/about-developer' element={<AboutDeveloper />} />
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
