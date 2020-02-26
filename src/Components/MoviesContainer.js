import React from 'react';
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

function MoviesContainer({ movies }) {
  const classes = useStyles();



  return (

    <div className={classes.root}>
      <Grid container spacing={3}>

        {
          movies === undefined ? '' : (
            movies.slice(0, 8).map(movie => (
              <Grid xs={3} item className={classes.divider} key={movie.imdbID}>

                {/* <div className={classes.paper}></div> */}
                <Movie
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                  className={classes.paper}
                  movies={movies}

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