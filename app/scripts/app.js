'use strict';

/**
 * @ngdoc overview
 * @name myAngularApp
 * @description
 * # myAngularApp
 *
 * Main module of the application.
 */
var app = angular.module('myAngularApp', [
  'ui.router',
  'oc.lazyLoad'
]);

// routing setting
app.config(function ($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /login
  $urlRouterProvider.otherwise("/login");

  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "views/login.html",
    controller: 'LoginCtrl',
    controllerAs: 'vm',
    resolve: {
      loadMyFiles: function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'login',
          files: [
            'styles/login.css',
            'scripts/services/authentication.service.js',
            'scripts/controllers/login.controller.js'
          ]
        })
      }
    }
  })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/template.html',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'login',
            files: [
              'scripts/directives/header/header.js'
            ]
          })
        }
      }
    })
    .state('dashboard.home', {
      url: '/home',
      templateUrl: 'views/dashboard.html'
    });

});
