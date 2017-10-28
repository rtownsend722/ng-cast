angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    context = this;
    this.videos;
    this.mainvideo;
    this.query;
    this.changevideo = (index) => {
      this.mainvideo = this.videos[index];
    };
    this.searchvideo = () => {
      youTube.search(this.query).then(function(response) {
        context.videos = response.data.items;
        context.mainvideo = (response.data.items[0]);
      }, function errorCallback(response) {
        console.log('error');
      });
    };
  },

  templateUrl: 'src/templates/app.html'
});

