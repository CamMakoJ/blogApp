angular.module('blogApp', ['ui.router', 'firebase', 'ngMaterial'])

    .run(["$rootScope", "$state", function($rootScope, $state) {
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {


            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $state.go("home");
            } 
        });
    }])

    .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .dark();
        });
