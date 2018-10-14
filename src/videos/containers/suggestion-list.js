//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

// create a component
class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1'
      },
      {
        title: 'Pokemon',
        key: '2'
      }
    ]
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
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
