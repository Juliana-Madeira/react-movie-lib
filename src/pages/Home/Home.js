import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import CarouselMovies from '../../components/CarouselMovies/CarouselMovies';

import '../Home/Home.css';

const Home = () => {

  const navigate = useNavigate();
  
  const handleToPopularMovies = () => {
    navigate('/popular-movies')
  }

  const handleToButtonsHome = () => {
    navigate('#btn')
  }

  return (
    <div className='home_container' >
      <p className='title' id='#top'>Welcome to the best MovieLib!</p>
      <CarouselMovies/>
      <div className='categories'>
        <p className='title_categories'>Categories</p>
        <button type="button" className="faAngleDown_button">
          <HashLink to="#btn">
            <FaAngleDown size={25}/>
          </HashLink>
        </button>
      </div>
      <div  className='buttons_group' id='btn'>
        <HashLink to="#top">
          <button className='home_button'>
            Home
          </button>
        </HashLink>
        <button className='home_button' onClick={handleToPopularMovies}>Popular Movies</button>
        <button className='home_button'>Top Rated Movies</button>
        <button className='home_button'>People</button>
        <button className='home_button'>About MovieLib</button>
        <button className='home_button'>About Developer</button>
      </div>
    </div>
  )
}

export default Home;