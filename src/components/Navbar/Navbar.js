import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

// import SearchBar from '../SearchBar/SearchBar';

import '../Navbar/Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('')

  return (
    <nav className='navbar'>
        <Link to='/'><h2><BiCameraMovie/>MovieLib</h2></Link>
        <form className='form'>
        <input 
            type="text" 
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        <button type='submit' className='button-search'><BiSearchAlt2/></button>
    </form>
        {/* <SearchBar/> */}
    </nav>
  )
}

export default Navbar