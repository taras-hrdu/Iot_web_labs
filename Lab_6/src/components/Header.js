import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar:{
        background: 'none',
    },
    appbarWrapper:{
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle:{
        flexGrow: '1',
    },
    icon:{
        color: '#fff',
        fontSize: '2rem',
    },
    colorText:{
        color:'#5AFF3D',
    },
    appbarNav:{
        flexGrow: '1',
    },
    container:{
        textAlign: 'center',
    },
    title:{
        color:'#fff',
        fontSize:'4.5rem',
    },
    goDown:{
        color:'#5AFF3D',
        fontSize: '4rem',
    },
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() =>{
        setChecked(true);
    },[])
    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        My<span className={classes.colorText}>Weapons.</span>
                    </h1>
                    <h3 className={classes.appbarNav}>Catalog</h3>
                    <h3 className={classes.appbarNav}>Buy</h3>
                    <h3 className={classes.appbarNav}>Reviews</h3>
                    <h3 className={classes.appbarNav}>Contacts</h3>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse 
                in={checked} 
                {...(checked ? {timeout: 1000 } : {})} 
                collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />My 
                        <span className={classes.colorText}>Weapons.</span>
                    </h1>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.goDown} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}