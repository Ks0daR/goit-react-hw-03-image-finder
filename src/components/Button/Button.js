import React from 'react';

export default function Button({ onLoad }) {
  return (
    <button type="button" className="Button" onClick={onLoad}>
      Load more
    </button>
  );
}
