import React from 'react';
import '../App.css';
import {Link} from  'react-router-dom';

function Nav(){
    
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav>   
            <Link style={navStyle} to='/'>
                <h1>
                    My<span className="nav-text">Weapons.</span>
                </h1>
            </Link>
            <ul className="nav-links">
            <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/catalog'>
                    <li>Catalog</li>
                </Link>
                <Link style={navStyle} to='/buy'>
                    <li>Buy</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;