import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places2 from '../static/places2';
import { useHistory, useParams } from 'react-router-dom'

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

export default function ItemPage() {
    const classes = useStyles();

    const { id } = useParams()

    return (
        <div className={classes.root}>
            <ImageCard extended={true} place={places2[id-1]}/>
        </div>
    );
}

