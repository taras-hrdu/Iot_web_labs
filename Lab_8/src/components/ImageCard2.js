import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(255, 255, 255, 0.5)',
        margin:'20px',
    },
    media: {
        height: 380,
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
});

export default function ImageCard2({place}) {
    const classes = useStyles();
    const url = `/catalog/ItemPage/${place.id}`

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
                {/* <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                >
                    {place.description}
                </Typography> */}
                <Typography
                    variant="h5"
                >
                    {place.price}
                </Typography>
                {/* <Link to={url}>
                    <button className="buttonView" onClick={console.log('')}>View more</button>
                </Link> */}
            </CardContent>
        </Card>
    );
}
