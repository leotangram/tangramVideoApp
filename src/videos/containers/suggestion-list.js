//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// create a component
class SuggestionList extends Component {
  render() {
    const list = [
      {
        title: 'Leo',
        key: '1'
      },
      {
        title: 'nidas',
        key: '2'
      }
    ]
    return (
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})

//make this component available to the app
export default SuggestionList;
