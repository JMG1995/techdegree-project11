import apiKey from '../Config';

export default (query) => {
  fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1')
    .then(function(response) {
      // photo from response
      const photos = response.data.photos.photo;
      // create photo request
      const photoRequest = photos.map(function(photo) {
        const id = photo.id;
        return fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${id}&per_page=24&format=json&nojsoncallback=1')
          .then(function(size) {
            size.id = id;
            return size;
          });
      });
      // fire off photo request
      return Promise.all(photoRequest);
    })
    .then(function(photos) {
      // Format the response so React is happy for ID's -- Taken from @haleyward via GitHub
      const mediumPhotos = photos.map((photo) => {
        const size = photo.data.sizes.size.find((size) => size.label === 'Small');
        // Takes the small photo and returns it with the ID
        return Object.assign(size, { id: photo.id });
      });
    })
    .catch(function(error) {
      console.log('Error fetching data', error);
     });
}