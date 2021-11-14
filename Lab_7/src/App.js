import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import Buy from './components/Buy';


const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/back2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App(){
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/buy" element={<Buy />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

