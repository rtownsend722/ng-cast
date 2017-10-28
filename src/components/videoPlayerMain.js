angular.module('video-player')

.component('videoPlayerMain', {
  bindings: {
    mainVideo: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
