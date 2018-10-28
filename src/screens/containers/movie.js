//import liraries
import React, { Component } from 'react';

import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';

// create a component
class Movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header />
        <Player />
      </MovieLayout>
    );
  }
}

//make this component available to the app
export default Movie;
