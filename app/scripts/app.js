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
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('biography', {
                url: '/bio',
                templateUrl: 'views/biography.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'views/projects.html'
            })
            .state('discography', {
                url: '/discography',
                templateUrl: 'views/discography.html'
            });

    });
