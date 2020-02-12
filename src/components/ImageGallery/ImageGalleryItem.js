import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpen }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => onOpen(largeImageURL)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
