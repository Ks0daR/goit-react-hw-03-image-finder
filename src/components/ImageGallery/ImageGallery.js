import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images, onOpen }) {
  console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpen={onOpen}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
