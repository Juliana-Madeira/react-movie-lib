import axios from 'axios';
import React, { useState, useEffect } from 'react';

import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';

import '../People/People.css';


const People = () => {
    const [people, setPeople] = useState([]);

    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    const image = process.env.REACT_APP_WEATHER_IMG;


    const getAllPopularPeople = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${api_key}`)
            setPeople(data.results)
            console.log(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllPopularPeople()
    })

  return (
    <div>
        <ButtonsGroup/>
        <p className='title'>People</p>
        <div className='people-page'>
            {people.map((onePeople) => {
                return(
                    <div className='people-card'>
                        <img src={image + onePeople.profile_path} alt={onePeople.name} className='people-card-photo' />
                        <h2>{onePeople.name}</h2>
                        <p>Popularity: {onePeople.popularity}</p>
                        <p>Job: {onePeople.known_for_department}</p>
                        <div className='people-movies'>
                            <img src={image +onePeople.known_for[0].poster_path} alt="" />
                            <img src={image +onePeople.known_for[1].poster_path} alt="" />
                            <img src={image +onePeople.known_for[2].poster_path} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default People