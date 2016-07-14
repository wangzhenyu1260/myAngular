'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp').controller('LoginCtrl', LoginController);

function LoginController($location, AuthenticationService) {
  var vm = this;
  vm.login = login;

  // initController();

  // function initController() {
  //   // reset login status
  //   // AuthenticationService.ClearCredentials();
  // }

  function login() {
    vm.dataLoading = true;
    AuthenticationService.Login(vm.username, vm.password, function (response) {
      if (response.success) {
        // AuthenticationService.SetCredentials(vm.username, vm.password);
        $location.path('/dashboard/home');
      } else {
        //FlashService.Error(response.message);
        vm.error = 'Username or password is incorrect';
        vm.dataLoading = false;
      }
    });
  };
}
