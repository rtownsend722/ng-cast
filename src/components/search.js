angular.module('video-player')

.component('search', {
  bindings: {
    searchvideo: '<',
    query: '='
  },

  templateUrl: 'src/templates/search.html'
});
