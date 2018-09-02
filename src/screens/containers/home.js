//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Home extends Component {
  render() {
    return this.props.children
  }
}

//make this component available to the app
export default Home;
