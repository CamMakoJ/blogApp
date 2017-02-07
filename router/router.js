angular.module('blogApp')

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
  .state(homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'views/home/home.html',
    authRequired: false
  })

  .state(signInState = {
    name: 'login',
    url: '/login',
    templateUrl: 'views/login/login.html',
    authRequired: false
  })

  .state(adminState = {
    name: 'admin',
    url: '/admin',
    templateUrl: 'views/admin/admin.html',
    authRequired: true
  });

  // Send to the homepage if the URL was not found
  $urlRouterProvider.otherwise("/");

});
