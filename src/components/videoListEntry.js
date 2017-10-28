angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    changevideo: '<',
    index: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
