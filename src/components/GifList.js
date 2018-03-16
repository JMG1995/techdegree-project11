import React from 'react';
import Gif from './Gif';

function GifList(props) {

  const results = props.data;
  // let gifs = results.map(gif => {
  //   <Gif url={gif.photo.getSizes} />
  // });

  return (
    <ul className="gif-list">
      <Gif />
    </ul>
  );
}

export default GifList;