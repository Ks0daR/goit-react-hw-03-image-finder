import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import getImagesByQuery from '../utils/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    openModal: false,
    searchQuery: '',
    page: 1,
    imgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;

    if (oldQuery !== newQuery) {
      this.loadNewContent();
    }
  }

  handleSubmit = value => {
    this.setState({ searchQuery: value, page: 1, images: [] });
  };

  loadNewContent = () => {
    const { searchQuery, page } = this.state;
    console.log(searchQuery);
    console.log(page);

    getImagesByQuery(searchQuery, page).then(({ data: { hits } }) =>
      this.setState(state => ({
        images: [...state.images, ...hits],
        page: state.page + 1,
      })),
    );
  };

  openLargeImage = largeImgUrl => {
    this.setState({ imgUrl: largeImgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({ openModal: !state.openModal }));
  };

  render() {
    const { images, loading, openModal, imgUrl } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />;
        {images.length > 0 && (
          <>
            <ImageGallery images={images} onOpen={this.openLargeImage} />
            <Button onLoad={this.loadNewContent} />
            {openModal ? (
              <Modal onClose={this.toggleModal} imgUrl={imgUrl} />
            ) : null}
          </>
        )}
      </>
    );
  }
}
