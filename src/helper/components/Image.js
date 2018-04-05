import React from 'react';

class Image extends React.Component {

// displays the image and clicking on it redirects the user to the image on the Flickr site in a new tab.
  render() {
    return (
      <a href={this.props.url} target="_blank">
        <img className='photo' src={this.props.source} alt='' />
      </a>
    );
  }
}

export default Image;