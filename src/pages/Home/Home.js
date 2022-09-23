import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import CarouselBrands from '../../components/CarouselBrands/CarouselBrands';

import '../Home/Home.css';

const Home = () => {

  const navigate = useNavigate();
  
  const handleToPopularMovies = () => {
    navigate('/popular-movies')
  }

  return (
    <div className='home_container'>
      <p className='title'>Welcome to the best MovieLib!</p>
      <CarouselBrands/>
      <div className='categories'>
        <p className='title_categories'>Categories</p>
        <button type="button" className="faAngleDown_button">
          <FaAngleDown size={25}/>
        </button>
      </div>
      <div  className='buttons_group'>
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