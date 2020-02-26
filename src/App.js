import React from 'react';
import SearchParams from './Components/SearchParams';
// import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';



function App() {
  const style = {
    height: '100vh',
    padding: 0,


    backgroundImage: 'url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
    // margin: 0,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed component="div" style={style}>
        <SearchParams />

      </Container>
    </React.Fragment>
  );
}

export default App;
