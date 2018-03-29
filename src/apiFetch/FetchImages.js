import apiKey from '../Config';
import axios from 'axios';
/*
@param query
@returns promise
*/

export default (query) => {
  return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
      // photo from response
      const photos = response.data.photos.photo;
      // create photo request
      const photoRequest = photos.map((photo) => {
        const id = photo.id;

        return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${id}&per_page=16&format=json&nojsoncallback=1`)
          .then(size => {
            size.id = id;
            return size;
          });

      });
      // fire off photo request
      return Promise.all(photoRequest);
    })
    .then((photos) => {
      // Format the response so React is happy for ID's -- Taken from @haleyward via GitHub
      const LargeSquarePhotos = photos.map((photo) => {
        const size = photo.data.sizes.size.find((size) => size.label === 'Large Square');
        // Takes the small photo and returns it with the ID
        return Object.assign(size, { id: photo.id });
      });

      return LargeSquarePhotos;
    })
    .catch(function(error) {
      console.log('Error fetching data', error);
     });
}