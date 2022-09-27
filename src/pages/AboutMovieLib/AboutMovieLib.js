import React from 'react'
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup'

const AboutMovieLib = () => {
  return (
    <div>
        <ButtonsGroup/>
        <h2 className='title'>About MovieLib</h2>
        <p>The MovieLib app was all created in React.js, styled with CSS3.</p>
        <p>Requests were made to the TMDB API, an API with information about movies, people and much more. For these requests, the axios library was used.</p>
        <p>Discover the API used here https://developers.themoviedb.org/3/getting-started/introduction</p>
        <p>This project was made by web developer Juliana Madeira</p>
    </div>
  )
}

export default AboutMovieLib