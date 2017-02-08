angular.module('blogApp')

    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

            $stateProvider
                //NavBar
                .state(navbarState = {
                    name: 'root',
                    url: '',
                    abstract: true,
                    views: {
                        'navbar': {
                            templateUrl: 'views/navbar/navbar.html'
                        }
                    }
                })

                //General Pages
                .state(homeState = {
                    name: 'root.home',
                    url: '/',
                    views: {
                        'main@': {
                            templateUrl: 'views/home/home.html'
                        }
                    }
                })

                .state(signInState = {
                    name: 'root.login',
                    url: '/login',
                    views: {
                        'main@': {
                            templateUrl: 'views/login/login.html'
                        }
                    }
                })

                //Pages requireSignIn
                .state(adminState = {
                        name: 'root.admin',
                        url: '/admin',
                        views: {
                            'main@': {
                                templateUrl: 'views/admin/admin.html'
                            }
                          },
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
