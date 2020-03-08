import React, { useState, Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Movie from './Movie';
import './FMstyles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(50),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(0),

    },
  },
  title: {
    flexGrow: 1,

    fontSize: '2rem',
    fontFamily: 'Courgette',

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },


  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const FavoriteMovies = () => {
  const classes = useStyles();
  const [favoriteMoviesArray, setFavoriteMoviesArray] = useState(JSON.parse(localStorage.getItem('movieArrayInLocalStorage')) || [])

  const removeMovie = (e) => {
    const id = e.currentTarget.dataset.id;
    const updatedMoviesArray = favoriteMoviesArray.filter(movie => movie.imdbID !== id);

    setFavoriteMoviesArray(updatedMoviesArray)
  }

  const moreInfo = (e) => {
    const title = e.currentTarget.dataset.title;
    const movieInfo = `https://en.wikipedia.org/wiki/${title}`
    window.open(movieInfo, "_blank")
  }



  useEffect(() => {
    localStorage.setItem('movieArrayInLocalStorage', JSON.stringify(favoriteMoviesArray));
  }, [favoriteMoviesArray])


  return (
    <Fragment>

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to='/'>

              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <HomeIcon color="secondary" fontSize="large" />
              </IconButton>

            </Link>

            <Typography variant="h5" className={classes.title}>
              Favorite Movies
            </Typography>

          </Toolbar>
        </AppBar>


      </div>

      <Grid container spacing={3}>
        {favoriteMoviesArray === [] ? '' : (

          favoriteMoviesArray.map(movie => (

            <Grid item xs={6} sm={4} key={movie.imdbID}>

              <Movie

                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                id={movie.imdbID}

                removeMovie={removeMovie}
                moreInfo={moreInfo}
              />

            </Grid>
          ))
        )
        }
      </Grid>

    </Fragment>


  );
}

export default FavoriteMovies;