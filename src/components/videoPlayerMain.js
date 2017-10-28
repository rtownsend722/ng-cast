angular.module('video-player')

.component('videoPlayerMain', {

  bindings: {
    mainvideo: '<'
  },

  templateUrl: 'src/templates/videoPlayer.html'
});