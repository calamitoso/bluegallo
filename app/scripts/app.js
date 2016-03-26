'use strict';

/**
 * @ngdoc overview
 * @name bluegalloApp
 * @description
 * # bluegalloApp
 *
 * Main module of the application.
 */
angular
    .module('bluegalloApp', [
        'ngAnimate',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '?vid',
                abstract: true,
                views: {
                    '': {
                        template: '<div ui-view></div>'
                    },
                    'video-player': {
                        templateUrl: 'views/video-player.html',
                        controller: 'VideoPlayerController'
                    }
                },
            })
                .state('main.home', {
                    url: '/',
                    template: '<h2>home</h2>'
                })
                .state('main.biography', {
                    url: '/biography',
                    templateUrl: 'views/biography.html'
                })
                .state('main.projects', {
                    url: '/projects',
                    templateUrl: 'views/projects.html'
                })
                .state('main.discography', {
                    url: '/discography',
                    templateUrl: 'views/discography.html'
                });

    });