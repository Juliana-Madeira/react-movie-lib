import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';


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
    }, [])

  return (
    <div>
        <ButtonsGroup/>
        <h2 className='title'>People</h2>
        <div>
            {people.map((onePeople) => {
                return(
                    <div>
                        <img src={image + onePeople.profile_path} alt={onePeople.name} height='300px' />
                        <div>{onePeople.name}</div>
                        <div>{onePeople.popularity}</div>
                        <div>{onePeople.known_for_department}</div>
                        <div>
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