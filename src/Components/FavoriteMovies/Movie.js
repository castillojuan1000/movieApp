import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: 360,
    height: 250,
    marginTop: '2vh',
    background: '#B5C588',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,


  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {

    flex: '1 0 auto',

  },
  typo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 15

    },
  },
  cover: {
    flexBasis: '40vh',
    width: 290,
  },
}));


const Movie = ({ title, year, poster, id, removeMovie, moreInfo }) => {
  const classes = useStyles();


  return (
    <Card className={classes.root} >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6" className={classes.typo} >
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.typo} style={{ marginTop: '1rem' }}>
            {year}
          </Typography>
        </CardContent>


        <IconButton
          aria-label="play/pause"
          data-id={id}
          onClick={removeMovie}>

          <BackspaceIcon color='secondary' />
        </IconButton>


      </div >
      <CardMedia
        className={classes.cover}
        image={`${poster}`}
        title="movie poster"
        onClick={moreInfo}
        data-title={title}
        style={{ cursor: `pointer` }}
      />
    </Card>
  )

}

export default Movie;