import React, {useState} from 'react'


import ImageCard from './ImageCard';
import places2 from '../static/places2';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function DataFetching({devices}) {

    const [data] = useState(places2);
    const classes = useStyles();
    return (
        <div>
            <ul>
                {
                    <div className={classes.root}>
                        {devices.map(place => (<ImageCard extended={false} place={place}/>))}
                        {data.length === 0 && <span>No records found to display!</span>}
                    </div>
                }
            </ul>
        </div>
    )
}



export default DataFetching
