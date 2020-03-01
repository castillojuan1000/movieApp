import React, { useState, useEffect } from 'react';
import Movie from '../Components/Movie';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function MoviesContainer({ movies, staticMovies }) {
  const classes = useStyles();
  const [moviesArray, setMoviesArray] = useState(JSON.parse(localStorage.getItem('movieArrayInLocalStorage')) || []);

  const addingMovies = (e) => {
    const id = e.currentTarget.dataset.id;
    const movieToBeAdded = movies === undefined ? (staticMovies.filter(movie => movie.imdbID === id)) : movies.filter(movie => movie.imdbID === id)

    setMoviesArray(prevMovie => [...prevMovie, ...movieToBeAdded])
  }


  useEffect(() => {
    const moviesArrayToBeClean = moviesArray;

    //new Set() will return an array with unique values, meaning that we will not have repetitive movies added to local storage

    const cleanMoviesArray = [...new Set(moviesArrayToBeClean.map(movie => movie))]

    localStorage.setItem('movieArrayInLocalStorage', JSON.stringify(cleanMoviesArray));
  }, [moviesArray]);



  return (

    <div className={classes.root}>
      <Grid container spacing={3}>

        {
          movies === undefined ? (
            staticMovies.slice(0, 8).map(movie =>
              (<Grid xs={6} sm={3} item className={classes.divider} key={movie.imdbID}>
                <Movie
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                  className={classes.paper}
                  movies={movies}
                  addingMovies={addingMovies}
                />

              </Grid>)
            )
          ) : (
              movies.slice(0, 8).map(movie => (
                <Grid xs={6} sm={3} item className={classes.divider} key={movie.imdbID}>

                  {/* <div className={classes.paper}></div> */}
                  <Movie
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    id={movie.imdbID}
                    className={classes.paper}
                    movies={movies}
                    addingMovies={addingMovies}
                  />

                </Grid>
              ))
            )
        }
      </Grid>
    </div>


  )
}

export default MoviesContainer;