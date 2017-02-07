angular.module('blogApp', ['ui.router'])

.run(function($rootScope){

  //stateChange event
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    var user = firebase.auth().currentUser;
    if (toState.authRequired && !user){ //Assuming the AuthService holds authentication logic
      // User isn’t authenticated
      $state.transitionTo("home");
      event.preventDefault();
    }
  });



});
