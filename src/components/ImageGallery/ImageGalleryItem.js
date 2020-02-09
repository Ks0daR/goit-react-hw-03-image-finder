import React from 'react';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onOpen,
}) {
  console.log(tags);
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
