import React from 'react';
import '../App'
import {Link} from 'react-router-dom'
const Navbar=()=> {
  return (
    <div className="navbar">
      <div>
        <h1>MyBooks</h1>
      </div>
      <div>
        <Link to="/favorites" style={{color:'white' ,textDecoration:'none'}}>
        <h3>Your Favorites</h3>
        </Link>
        </div>

    </div>
  );
};

export default Navbar;