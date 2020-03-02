import React, { useState, useEffect } from 'react';


import axios from 'axios';
// import { Link } from '@reach/router'; // this link will be used with the like button to rederect to liked movies
import MoviesContainer from './MoviesContainer';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import { red } from '@material-ui/core/colors';
import useStyles from './Config-M-UI/SearchParamConfig';
import { Link } from 'react-router-dom';






function SearchParams() {

  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [staticMovies, setStaticMovies] = useState([]);
  const classes = useStyles();

  const STATIC_MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"



  useEffect(() => {

    axios.get(`https://www.omdbapi.com/?s=${value}&apikey=57c3c48f`)
      .then((data) => {
        const movieArray = data.data.Search;
        setMovies(movieArray)
      })


  }, [value])


  useEffect(() => {
    axios.get(STATIC_MOVIE_API_URL).then((data) => {
      const staticMovieArray = data.data.Search;
      setStaticMovies(staticMovieArray)
    })
  }, [])




  return (
    <div>
      <div className='navbar'>

        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Link to='/favorites' style={{ textDecoration: 'none', color: 'white' }}>

                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <FavoriteTwoToneIcon style={{ fontSize: 40, color: red[500] }} className="favIcon" />
                  <Typography style={{ fontSize: '.9rem' }} className={classes.title}>Favorites</Typography>
                </IconButton>

              </Link>
              <Typography className={classes.title} variant="h5" noWrap>
                MovieApp
              </Typography>
              <form onSubmit={e => {
                e.preventDefault()

              }}>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => (setValue(e.target.value))}
                  />
                </div>
              </form>
            </Toolbar>
          </AppBar>
        </div>
      </div>

      <div className='moviesContainer'>
        <MoviesContainer movies={movies} style={{ margin: '1rem' }} staticMovies={staticMovies} />
      </div>
    </div >
  )
}





export default SearchParams;