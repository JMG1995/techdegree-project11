import React from 'react';
import Image from './Image';

function ImageList(props) {

  const results = props.data;
  // let gifs = results.map(gif => {
  //   <Gif url={gif.photo.getSizes} />
  // });

  return (
    <ul className="gif-list">
      <Image />
    </ul>
  );
}

export default ImageList;