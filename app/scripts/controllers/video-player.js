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
            function ($scope, $stateParams, $sce, videoPlayerService) {


                
                
                //itialize status var
                //todo get from service
                //todo filter out non numeric video ids

                videoPlayerService.setVideo($stateParams.vid);
                var isPanelOpened;

                var togglePlayer = function(){
                    isPanelOpened = !isPanelOpened;
                };

                var closePlayer = function(){
                    isPanelOpened = false;
                    videoPlayerService.setVideo(null);
                    // $location.search('vid', isPanelOpened ? videoPlayerService.getCurrentVideo() : null);
                };

                var getPanelStatus = function(){
                    return isPanelOpened;
                };

                var getEmbedCode = function(){
                    return videoPlayerService.getCurrentVideo() ?
                        $sce.trustAsHtml(videoPlayerService.getCurrentVideo().embedCode) : null;
                };

                var getVideoAvailable = function(){
                    return !!videoPlayerService.getCurrentVideo();
                };

                //initialize panel status
                isPanelOpened = !!videoPlayerService.getCurrentVideo();

                angular.extend($scope, {
                    togglePlayer: togglePlayer,
                    closePlayer: closePlayer,
                    getPanelStatus: getPanelStatus,
                    getEmbedCode: getEmbedCode,
                    getVideoAvailable: getVideoAvailable
                });
            }
        ]
    );