import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Home/Home.css";

const ButtonsGroup = () => {
  return (
    <div className="buttons_group" id="btn">
      <Link to="/">
        <button className="home_button">Home</button>
      </Link>
      <Link to="/top-rated-movies">
        <button className="home_button">Top Rated Movies</button>
      </Link>
      <Link to="/popular-movies">
        <button className="home_button">Popular Movies</button>
      </Link>
      <Link to="/people">
        <button className="home_button">People</button>
      </Link>
      <Link to='/about-movie-lib'>
        <button className="home_button">About MovieLib</button>
      </Link>
      <Link to='about-developer'>
        <button className="home_button">About Developer</button>
      </Link>
    </div>
  );
};

export default ButtonsGroup;
