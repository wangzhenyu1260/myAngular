'use strict';
/**
 * Created by sam on 16/7/13.
 */
angular.module('myAngularApp')
  .directive('header',function(){
    return {
      templateUrl:'views/directives/header/header.html',
      restrict: 'E',
      replace: true
    }
  });
