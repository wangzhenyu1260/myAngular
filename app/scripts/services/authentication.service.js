'use strict';

/**
 * @ngdoc service
 * @name myAngularApp.authenticationService
 * @description
 * # authenticationService
 * Service in the myAngularApp.
 */
angular.module('myAngularApp').service('AuthenticationService', AuthenticationService);

function AuthenticationService($timeout) {
  var service = {};
  service.Login = Login;

  // service.SetCredentials = SetCredentials;
  // service.ClearCredentials = ClearCredentials;

  return service;

  function Login(username, password, callback) {
    /* Dummy authentication for testing, uses $timeout to simulate api call
     ----------------------------------------------*/
    $timeout(function () {
     var response = {success: username === 'test' && password === 'test'};
     callback(response);
    }, 1000);

  }
}
