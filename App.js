import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import Api from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    const movies = await Api.getSuggestion(10);
    console.log(movies);
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorias</Text>
        <SuggestionList />
      </Home>
    );
  }
}
