import React, { useState } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places2 from '../static/places';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(2);

    const loadMore = () => {
        setVisible(visible + 2)
    }

    const renderingCard = (place) =>{
        return(
            <div>
                <ImageCard extended={true} place={place}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {places2.slice(0, visible).map(place => renderingCard(place))}
            {visible < places2.length && (
                <button className="buttonViewMore" onClick={loadMore}>View more</button>
            )}
        </div>
    );
}

