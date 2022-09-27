import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';


import CarouselMovies from '../../components/CarouselMovies/CarouselMovies';

import '../Home/Home.css';

const Home = () => { 

  return (
    <div className='home_container' >
      <p className='title' id='#top'>Welcome to the best MovieLib!</p>
      <CarouselMovies/>
      <ButtonsGroup/>
      {/* <div className='categories'>
        <p className='title_categories'>Categories</p>
        <button type="button" className="faAngleDown_button">
          <HashLink to="#btn">
            <FaAngleDown size={25}/>
          </HashLink>
        </button>
      </div> */}
    </div>
  )
}

export default Home;