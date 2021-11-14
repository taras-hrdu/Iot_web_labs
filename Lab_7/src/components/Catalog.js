import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard2 from './ImageCard2';
import places2 from '../static/places2';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
export default function Catalog() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {places2.map(place => (<ImageCard2 place={place}/>))}
        </div>
    );
}

