angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.mainvideo = window.exampleVideoData[0];
    this.changevideo = (index) => {
      //access the new video clicked 
      this.mainvideo = this.videos[index];
    };
    
  },

  templateUrl: 'src/templates/app.html'
});
