angular.module('blogApp')

    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state(homeState = {
                name: 'home',
                url: '/',
                templateUrl: 'views/home/home.html',
            })

            .state(signInState = {
                name: 'login',
                url: '/login',
                templateUrl: 'views/login/login.html',
            })

            .state(adminState = {
                name: 'admin',
                url: '/admin',
                templateUrl: 'views/admin/admin.html',
                resolve: {
                    // controller will not be loaded until $requireSignIn resolves
                    // Auth refers to our $firebaseAuth wrapper in the factory below
                    "currentAuth": ["Auth", function(Auth) {
                        // $requireSignIn returns a promise so the resolve waits for it to complete
                        // If the promise is rejected, it will throw a $stateChangeError (see above)
                        return Auth.$requireSignIn();
                    }]
                }
            });

        // Send to the homepage if the URL was not found
        $urlRouterProvider.otherwise("/");

    }]);
