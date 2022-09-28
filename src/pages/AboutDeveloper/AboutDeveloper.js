import React from 'react'
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup'

import '../AboutMovieLib/AboutMovieLib.css';

const AboutDeveloper = () => {
  return (
    <div className='about'>
      <ButtonsGroup/>
        <p className='title'>About Developer</p>
        <div className='text_container'>
          <p>Living in Sao Paulo, Brazil. Designer since 2001, postgraduate in Quality and Productivity Management and Full Stack Web Developer (MERN Stack) by Ironhack at the São Paulo/Brazil campus.</p> 
          <p>Outstanding in solving problems using good practices and a lot of creativity in design and development.</p>
          <p>Used to working in a team, always using the agile Kanban methodology.</p>
          <p>Javascript, HTML5, CSS3, React.js, Styled-Components, Axios, Node.js, MongoDB, Express, Firebase, Restfull API, are some skills in the web knowledge repertoire.</p>
        </div>
    </div>
  )
}

export default AboutDeveloper