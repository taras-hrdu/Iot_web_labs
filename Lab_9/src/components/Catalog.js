import React, {useState, useEffect} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places2 from '../static/places2';
import DataFetching from './DataFetching';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
    },
    filter:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));


export default function Catalog() {
    const classes = useStyles();

    const [searchText, setSearchText] = useState('');
    const [devices, setPosts] = useState([])
    const [data] = useState(places2);
    const [sortType, setSortType] = useState(null)

    const [loading, setLoading] = useState(true)

    const excludeColumn = ['description', 'price'];

    const handleChange = value => {
        axios.get(`http://127.0.0.1:5000/search?title=${value}`).then(res => {
            setPosts(res.data)
        })
        setSearchText(value);
    }


    const onSort = sortType =>{
        setSortType(sortType);
    }

    const sorted = devices.sort((a , b) => {
        if (sortType != null) {
            const isReserved = (sortType === 'asc') ? 1: -1;
            return isReserved * a.title.localeCompare(b.title)
        } else {
            return
        }
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/devices')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
                setTimeout(() =>{
                    setLoading(false)
                },2000)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (loading==true ? <div className="circular"><CircularProgress className="circularProgress"/></div> : 
        <div>
            <div className={classes.inputs}>
                <div className={classes.filter}>
                    <button className="buttonViewMore" onClick={() => onSort('asc')}>Sort by asc</button>
                    <button className="buttonViewMore" onClick={() => onSort('desc')}>Sort by desc</button>         
                </div>
                <input
                className="inputSearch"
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
                />
            </div>
            <div className="">
                <div className="">
                    <div className={classes.root}>
                        <DataFetching devices={devices}/>
                        {devices.length === 0 && <span>No records found to display!</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

