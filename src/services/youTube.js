angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: query, 
        part: 'snippet',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true',
        type: 'video'
      }   
    });
  };
});




                                                                                                                                                                                                                               