import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import './App.css';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SearchResults from './pages/SearchResults/SearchResults';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/movie_id' element={<MovieDetails/>}/>
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
    </div>
  );
}

export default App;
