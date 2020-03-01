import React from 'react';
import SearchParams from './Components/SearchParams';
import FavoriteMovies from './Components/FavoriteMovies/FavoriteMovies'
// import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import { Route } from 'react-router-dom';



function App() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed component="div">

        <Route exact path="/" component={SearchParams} />
        <Route exact path="/favorites" component={FavoriteMovies} />

      </Container>
    </React.Fragment>
  );
}

export default App;
