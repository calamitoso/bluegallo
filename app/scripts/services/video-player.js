'use strict';

/**
 * @ngdoc service
 * @name bluegalloApp.videoProvider
 * @description
 * # videoProvider
 * Service in the bluegalloApp.
 */
angular.module('bluegalloApp')
    .factory('videoPlayerService', ['$location', '$rootScope', 'WebService', '_',
        function ($location, $rootScope, WebService, _) {

        var currentVideo;

        var videoTypes = Object.freeze({
            youtube: 'YOUTUBE',
            vimeo: 'VIMEO'
        });

        _.filter();

        // var getVideoByIndex = function(index){
        //     return videos[index];
        // };

        // var getVideoById = function(videoId){
        //     return _.filter(videos, videoId);
        // };

        var getEmbedCode = function(video){
            var r;
            if(video.type === videoTypes.youtube){
                r = '<iframe id="ytplayer" type="text/html" width="640" height="480" src="http://www.youtube.com/embed/' + video.id + '" frameborder="0"/>';
            }
            if(video.type === videoTypes.vimeo){
                r = '<iframe src="https://player.vimeo.com/video/' + video.id + '" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
            return r;
        };

        var getVideoInfo = function(video){
            var r;
            if(video.type === videoTypes.youtube){
                r = WebService.getVideoInfo(video.id);
            }
            return r;
        };

        var videos = [
            {
                id: '101351587',
                type: videoTypes.vimeo
            },
            {
                id: 'Vygf4aFo--Y',
                type: videoTypes.youtube
            }
        ];

        return {
            setVideo: function(video){
                // console.log('setVideo', video);
                currentVideo = video;
                $location.search('vid', currentVideo);
                $rootScope.videoPlayerOpen = !!currentVideo;
            },
            getCurrentVideo: function(){
                return videos[currentVideo] || null;
            },
            getEmbedCode: getEmbedCode,
            getVideoInfo: getVideoInfo
        };
    }]);
