import React from 'react';
// import { FaAngleDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';
import CarouselMovies from '../../components/CarouselMovies/CarouselMovies';

import '../Home/Home.css';

const Home = () => { 

  return (
    <div className='home_container' >
      <div className='mobile_content'>
        <p className='mobile_text'>"With great power comes great responsibility..."</p>
        <button className='btn_hamburger_menu'><FaBars size={30}/></button>
      </div>
      <p className='title'>Welcome to the best MovieLib!</p>
      <CarouselMovies/>
      <ButtonsGroup/>
    </div>
  )
}

export default Home;