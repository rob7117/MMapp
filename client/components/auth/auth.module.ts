'use strict';

angular.module('meanProjectApp.auth', [
  'meanProjectApp.constants',
  'meanProjectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
