import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SearchResults from './pages/SearchResults/SearchResults';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
