import React from 'react';

// text to be displayed if no images matching the search are found
const ImageNotFound = () => {
  return (
      <div className="image-title">
        <h2>No Images Found:</h2>
        <p>Please try another search parameter</p>
      </div>
  );
  };


export default ImageNotFound;