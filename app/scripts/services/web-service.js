'use strict';

/**
 * @ngdoc service
 * @name ecoverageApp.WebService
 * @description
 * # WebService
 * Service in the ecoverageApp.
 */
angular.module('bluegalloApp')
    .factory('WebService', ['$http',
        function ($http) {

            var WebService = {};

            /*
             * @method getToken
             */
            // WebService.getToken = function (credentials) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/token',
            //         headers:{
            //             Authorization: 'Basic ' + window.btoa(window.unescape(encodeURIComponent(credentials.email + ':' + credentials.password)))
            //         },
            //         bypassUnauthorizedRedirect: true
            //     }).then(
            //         function(response){
            //             //set Authorization header for the rest of the API calls
            //             WebService.registerAuthorizationHeaders(response.data.token);
            //             //and continue
            //             return response;
            //         },
            //         function(response){
            //             return $q.reject(response);
            //         }
            //     );
            // };

            var youtube = {
                endpoint: 'https://www.googleapis.com/youtube/v3/videos',
                apiKey: 'AIzaSyC8BKeGQSjTJYJDPIdlQDimvlbXnf9tn4E'
            };

            /*
             * @method getUsers
             */
            WebService.getVideoInfo = function (videoId) {
                var queryParameters = {
                    part: 'snippet',
                    id: videoId,
                    key: youtube.apiKey
                };
                return $http({
                    method: 'GET',
                    url: youtube.endpoint,
                    params: queryParameters
                });
            };


            // /*
            //  * @method getUsers
            //  */
            // WebService.getUser = function (userId) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/user/' + userId
            //     });
            // };

            // /*
            //  * @method postUser
            //  */
            // WebService.postUser = function (data) {
            //     return $http({
            //         method: 'POST',
            //         url: CONFIG.webServiceEndpoint + '/user/create',
            //         data: data
            //     });
            // };

            // /*
            //  * @method getUsers
            //  */
            // WebService.putUser = function (userId, data, token) {
            //     var headers = $http.defaults.headers.common;
            //     if(token){
            //         //override global auth token
            //         headers.Authorization =  'Basic ' + window.btoa(window.unescape(encodeURIComponent(token + ':')));
            //     }
            //     return $http({
            //         method: 'PUT',
            //         url: CONFIG.webServiceEndpoint + '/user/' + userId,
            //         data: data,
            //         headers: headers
            //     });
            // };

            // /*
            //  * @method deleteUser
            //  */
            // WebService.deleteUser = function (userId) {
            //     return $http({
            //         method: 'DELETE',
            //         url: CONFIG.webServiceEndpoint + '/user/' + userId
            //     });
            // };

            // /*
            //  * @method userExists
            //  */
            // WebService.userExists = function (queryParameters) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/user/exists',
            //         params: queryParameters
            //     });
            // };

            // /*
            //  * @method getGroups
            //  */
            // WebService.getGroups = function(queryParameters) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/group/',
            //         params: queryParameters
            //     });
            // };

            // /*
            //  * @method getGroup
            //  */
            // WebService.getGroup = function (groupId) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/group/' + groupId
            //     });
            // };

            // /*
            //  * @method getGroupUsers - Get map of users by group
            //  */
            // WebService.getGroupUsers = function (groupId) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/group_map/'  + groupId
            //     });
            // };

            // /*
            //  * @method postGroup - Create a group
            //  */
            // WebService.postGroup = function (data) {
            //     return $http({
            //         method: 'POST',
            //         url: CONFIG.webServiceEndpoint + '/group/',
            //         data: data
            //     });
            // };

            // /*
            //  * @method deleteGroup - Create a group
            //  */
            // WebService.deleteGroup = function (groupId) {
            //     return $http({
            //         method: 'DELETE',
            //         url: CONFIG.webServiceEndpoint + '/group/' + groupId
            //     });
            // };

            // /*
            //  * @method putGroup
            //  */
            // WebService.putGroup = function (groupId, data) {
            //     return $http({
            //         method: 'PUT',
            //         url: CONFIG.webServiceEndpoint + '/group/' + groupId,
            //         data: data
            //     });
            // };

            // /*
            //  * @method getGroupMapByUser
            //  */
            // WebService.getGroupMapByUser = function (userId) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/group_map/user/'  + userId + '/'
            //     });
            // };

            // /*
            //  * @method postUserGroup
            //  */
            // WebService.postUserGroup = function (data) {
            //     return $http({
            //         method: 'POST',
            //         url: CONFIG.webServiceEndpoint + '/group_map/',
            //         data: data
            //     });
            // };


            // /*
            //  * @method deleteUserGroup
            //  */
            // WebService.deleteUserGroup = function (groupId, userId) {
            //     return $http({
            //         method: 'DELETE',
            //         url: CONFIG.webServiceEndpoint + '/group_map/' + groupId + '-' + userId
            //     });
            // };


            
            //  * @method registerAuthorizationHeaders
            //  * filter all web service calls to add token auth
             
            // WebService.registerAuthorizationHeaders = function(token){
            //     $http.defaults.headers.common.Authorization = 'Basic ' + window.btoa(window.unescape(encodeURIComponent(token + ':')));
            // };


            // /*
            //  * @method deregisterAuthorizationHeaders
            //  * remove token from web service calls
            //  */
            // WebService.deregisterAuthorizationHeaders = function(){
            //     delete $http.defaults.headers.common.Authorization;
            // };


            // /*
            //  * @method getGroup
            //  */
            // WebService.retrievePassword = function(queryParameters){
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/user/password_request',
            //         params: queryParameters
            //     });
            // };

            // /*
            //  * @method getGroup
            //  */
            // WebService.getBulkUsers = function(){
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/bulk/user'
            //     });
            // };

            // /*
            //  * Carto DB section
            //  */

            // /*
            //  * @method getLayers
            //  */
            // WebService.getLayers = function(queryParameters){
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/maps/',
            //         params: queryParameters
            //     });
            // };

            // /*
            //  * @method getLayerFolders
            //  */
            // WebService.getLayerFolders = function(queryParameters){
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/layer_folder/',
            //         params: queryParameters
            //     });
            // };

            // /*
            //  * @method getLayerFolder
            //  */
            // WebService.getLayerFolder = function(folderId){
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/layer_folder/' + folderId
            //     });
            // };


            // /*
            //  * @method postLayerFolder
            //  */
            // WebService.postLayerFolder = function(data){
            //     return $http({
            //         method: 'POST',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/layer_folder/',
            //         data: data
            //     });
            // };


            // /*
            //  * @method deleteLayerFolder
            //  */
            // WebService.deleteLayerFolder = function(folderId){
            //     return $http({
            //         method: 'DELETE',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/layer_folder/' + folderId
            //     });
            // };


            // /*
            //  * @method putLayerFolder
            //  */
            // WebService.putLayerFolder = function (folderId, data) {
            //     return $http({
            //         method: 'PUT',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/layer_folder/' + folderId,
            //         data: data
            //     });
            // };


            // /*
            //  * @method getCartoDbMapByFolder
            //  */
            // WebService.getCartoDbMapByFolder = function (folderId) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/cartodb_map/folder/'  + folderId + '/'
            //     });
            // };

            // /*
            //  * @method postCartoDbMap
            //  */
            // WebService.postCartoDbMap = function (data) {
            //     return $http({
            //         method: 'POST',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/cartodb_map/',
            //         data: data
            //     });
            // };


            // /*
            //  * @method deleteCartoDbMap
            //  */
            // WebService.deleteCartoDbMap = function (folderId, cartodbMapId) {
            //     return $http({
            //         method: 'DELETE',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/cartodb_map/' + folderId + '-' + cartodbMapId
            //     });
            // };


            // /*
            //  * @method putCartoDbMap
            //  */
            // WebService.putCartoDbMap = function (folderId, cartodbMapId, data) {
            //     return $http({
            //         method: 'PUT',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/cartodb_map/' + folderId + '-' + cartodbMapId,
            //         data: data
            //     });
            // };

            // /*
            //  * @method getFolderGroupMap
            //  */
            // WebService.getFolderGroupMap = function (folderId) {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/folder_map/folder/'  + folderId + '/'
            //     });
            // };


            // /*
            //  * @method postFolderGroupMap
            //  */
            // WebService.postFolderGroupMap = function (data) {
            //     return $http({
            //         method: 'POST',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/folder_map/',
            //         data: data
            //     });
            // };


            // /*
            //  * @method deleteFolderGroupMap
            //  */
            // WebService.deleteFolderGroupMap = function (folderId, groupId) {
            //     return $http({
            //         method: 'DELETE',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/folder_map/' + folderId + '-' + groupId
            //     });
            // };


            // /*
            //  * @method mapSync
            //  */
            // WebService.mapSync = function () {
            //     return $http({
            //         method: 'GET',
            //         url: CONFIG.webServiceEndpoint + '/cartodb/map_sync'
            //     });
            // };

            return WebService;
        }
    ]);