import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import getImagesByQuery from '../utils/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    openModal: false,
    searchQuery: '',
    page: 1,
    imgUrl: '',
    errorMessage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;

    if (oldQuery !== newQuery) {
      this.loadNewContent();
    }

    if (!this.state.loading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = value => {
    this.setState({ searchQuery: value, page: 1, images: [] });
  };

  loadNewContent = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    getImagesByQuery(searchQuery, page)
      .then(({ data: { hits } }) =>
        this.setState(state => ({
          images: [...state.images, ...hits],
          page: state.page + 1,
        })),
      )
      .catch(error => {
        this.setState({ errorMessage: error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
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
        <Searchbar onSubmit={this.handleSubmit} />;{loading ? <Loader /> : null}
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
