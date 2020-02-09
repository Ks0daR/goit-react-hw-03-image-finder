import React, { Component } from 'react';
import Searchbar from './Searchbar';
import getImagesByQuery from '../utils/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    openModal: false,
    searchQuery: '',
    page: 0,
  };

  handleSubmit = value => {
    this.setState({ inputValue: value });
    getImagesByQuery(value, this.state.page).then(data => console.log(data));
  };

  render() {
    const { images, inputValue, loading, openModal } = this.state;
    return <Searchbar onSubmit={this.handleSubmit} />;
  }
}
