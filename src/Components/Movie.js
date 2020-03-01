import React from 'react';
import '../style/Movie.css'
import { red } from '@material-ui/core/colors';

import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import IconButton from '@material-ui/core/IconButton'


function Movie({ title, year, poster, id, addingMovies }) {

  return (
    <div className='Mycontainer'>
      <img src={`${poster}`} alt={`${title}`} className='image' />
      <div className='overlay'>
        <div style={{ fontSize: '.9rem', color: 'yellow' }}>{title}</div>
        <div className='secondRow'>
          <div className='item' style={{ fontSize: '.8rem', color: 'yellow' }}>Year: {year}</div>
          <div className='item'>
            <IconButton
              edge="start"
              id={id}
              data-id={id}
              color="inherit"
              aria-label="open drawer"
              onClick={addingMovies}
            >
              <FavoriteTwoToneIcon style={{ fontSize: 25, color: red[500] }} />

            </IconButton>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Movie;