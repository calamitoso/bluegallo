'use strict';

/**
 * @ngdoc service
 * @name bluegalloApp.videoProvider
 * @description
 * # videoProvider
 * Service in the bluegalloApp.
 */
angular.module('bluegalloApp')
    .factory('videoPlayerService', ['$location', function ($location) {

        var currentVideo;

        var videos = [
            {
                embedCode: '<iframe src="https://player.vimeo.com/video/101351587" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
            },
            {
                embedCode: '<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/Vygf4aFo--Y" frameborder="0"/>'
            }
        ];

        return {
            setVideo: function(video){
                console.log('setVideo', video);
                currentVideo = video;
                $location.search('vid', currentVideo);
            },
            getCurrentVideo: function(){
                return videos[currentVideo] || null;
            }
        };
    }]);
