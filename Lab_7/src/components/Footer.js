import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '10vh',
        fontFamily: 'Nunito',
    },
    appbar:{
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    colorText: {
        color: '#5AFF3D',
    },
    icon:{
        color: '#fff',
        fontSize: '2rem',
    },
    icons1:{
        color:'#fff',
    },
    icons2:{
        color:'#fff',
    },
    icons3:{
        marginRight:'27rem',
        color:'#fff',
    },
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Container>
                    <Toolbar>
                        <h1 className={classes.appbarTitle}>
                            My<span className={classes.colorText}>Weapons.</span>
                        </h1>
                        <IconButton>
                            <InstagramIcon className={classes.icons1} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon className={classes.icons2} />
                        </IconButton>
                        <IconButton >
                            <TwitterIcon className={classes.icons3} />
                        </IconButton>
                        <IconButton>
                            <ArrowUpwardIcon className={classes.icon} />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}