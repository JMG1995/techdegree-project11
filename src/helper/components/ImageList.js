import React from 'react';
import Image from './Image';

function ImageList(props) {

// ul list containing the images
  return (
    <ul className="image-list">
      <Image />
    </ul>
  );
}

export default ImageList;