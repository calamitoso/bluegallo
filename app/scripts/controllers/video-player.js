'use strict';

/**
 * @ngdoc function
 * @name bluegalloApp.controller:VideoPlayerCtrl
 * @description
 * # VideoPlayerCtrl
 * Controller of the bluegalloApp
 */
angular.module('bluegalloApp')
    .controller('VideoPlayerController',
        [
            '$scope',
            '$stateParams',
            '$sce',
            'videoPlayerService',
            '$rootScope',
            function ($scope, $stateParams, $sce, videoPlayerService, $rootScope) {

                //todo filter out non numeric video ids

                //initialize videoPlayerService
                videoPlayerService.setVideo($stateParams.vid);

                var isPlayerOpen = !!videoPlayerService.getCurrentVideo();

                var togglePlayer = function(){
                    isPlayerOpen = !isPlayerOpen;
                    $rootScope.videoPlayerOpen = isPlayerOpen;
                };

                var closePlayer = function(){
                    isPlayerOpen = false;
                    videoPlayerService.setVideo(null);
                };

                var getPlayerStatus = function(){
                    return isPlayerOpen;
                };

                var getEmbedCode = function(){
                    var currentVideo = videoPlayerService.getCurrentVideo();
                    return currentVideo ?
                        $sce.trustAsHtml(videoPlayerService.getEmbedCode(currentVideo)) : null;
                };

                (function(){
                    var currentVideo = videoPlayerService.getCurrentVideo();
                    if(currentVideo && currentVideo.type === 'YOUTUBE'){
                        videoPlayerService.getVideoInfo(currentVideo)
                            .then(function(response){
                                $scope.videoInfo = response.data.items[0].snippet;
                                console.log($scope.videoInfo);
                            });
                    }
                })();

                var getVideoAvailable = function(){
                    return !!videoPlayerService.getCurrentVideo();
                };

                angular.extend($scope, {
                    togglePlayer: togglePlayer,
                    closePlayer: closePlayer,
                    getPlayerStatus: getPlayerStatus,
                    getEmbedCode: getEmbedCode,
                    getVideoAvailable: getVideoAvailable,
                });
            }
        ]
    );