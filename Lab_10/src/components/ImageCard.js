import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from  'react-router-dom';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(255, 255, 255, 0.5)',
        margin:'20px',
    },
    media: {
        height: 440,
    },
    title:{
        fontFamily:'Nunito',
        fontWeight:'bold',
        fontSize: '2rem',
    },
    desc:{
        fontFamily:'Nunito',
        fontSize: '1.1rem',
    },
    fullDesc:{
        fontFamily:'Nunito',
        fontSize: '1.1rem',
    },
});

function ImageCard(props) {
    const classes = useStyles();
    const place = props.place;
    const extended = props.extended
    const url = `/catalog/ItemPage/${place.id}`

    console.log(props);

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image= {place.imageUrl}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                >
                    {place.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                >
                    {place.description}
                </Typography> 
                {extended ? <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.fullDesc}
                >
                    {place.fullDescription}
                </Typography>: null }
                <Typography
                    variant="h5"
                >
                    {place.price}
                </Typography>
                <Typography className="buttons">
                    {!extended ? <Link to={url}>
                        <button className="buttonView" onClick={console.log('')}>View more</button>
                    </Link> : null}
                    <button onClick={() =>props.addBasket(place)} className="buttonView" >Add to cart</button>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default connect(null, { addBasket })(ImageCard);