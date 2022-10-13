import React, { useState } from 'react';
// import { BiSearchAlt2 } from 'react-icons/bi';

import '../SearchBar/SearchBar.css';

const SearchBar = () => {
    const [search, setSearch] = useState('');

  return (
    <form className='form-mobile'>
        <input 
            type="text" 
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        <button type='submit' className='button-search'><BiSearchAlt2/></button>
    </form>
  )
}

export default SearchBar;