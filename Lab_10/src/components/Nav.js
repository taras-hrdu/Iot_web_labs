import React, {useEffect} from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

function Nav(props){
    
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    console.log(props);

    useEffect(() => {
        getNumbers();
    }, [])

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
                <Link style={navStyle} to='/cart'>
                    <ion-icon name="basket"></ion-icon>Cart<span>{props.basketProps.basketNumbers}</span>
                </Link>
            </ul>
        </nav>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Nav);