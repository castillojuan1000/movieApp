import React, { useState, useEffect } from 'react';


import axios from 'axios';
// import { Link } from '@reach/router'; // this link will be used with the like button to rederect to liked movies
import MoviesContainer from './MoviesContainer';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import { red } from '@material-ui/core/colors';
import useStyles from './Config-M-UI/SearchParamConfig'






function SearchParams() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([])



  useEffect(() => {

    axios.get(`http://www.omdbapi.com/?s=${value}&apikey=57c3c48f`)
      .then((data) => {
        const movieArray = data.data.Search;
        setMovies(movieArray)
      })


  }, [value])




  return (
    <div>
      <div className='navbar'>

        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <FavoriteTwoToneIcon style={{ fontSize: 40, color: red[500] }} className="favIcon" />
                <Typography style={{ fontSize: '.9rem' }} className='favText'>Favorites</Typography>
              </IconButton>
              <Typography className={classes.title} variant="h5" noWrap>
                MoviesApp
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
        <MoviesContainer movies={movies} style={{ margin: '1rem' }} />
      </div>
    </div >
  )
}





export default SearchParams;