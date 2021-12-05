import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import Buy from './components/Buy';
import ItemPage from './components/ItemPage';
import { Provider } from 'react-redux';
import store from './store.js';

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
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <Nav />
          <Routes>
            <Route path="/" element={<Header />}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/cart" element={<Buy />}/>
            <Route path="/catalog/ItemPage/:id" element={<ItemPage />}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

