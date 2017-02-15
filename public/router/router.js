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
                url: '/home',
                views: {
                    'main@': {
                        templateUrl: 'views/home/home.html'
                    }
                }
            })

            //Unique post Pages, child of root.home
            .state(postState = {
                name: 'root.post',
                url: '/{{postId}}',
                views: {
                    'main@': {
                        templateUrl: 'views/post/post.html'
                    }
                },

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
                    },
                    'navbar@': {
                        templateUrl: 'views/adminNavbar/adminNavbar.html'
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
            })

            //child state of root.admin
            .state(adminViewState = {
                name: 'root.admin.newPost',
                url: '/new-post',
                views: {
                    'main@': {
                        templateUrl: 'views/newPost/newPost.html'
                    }
                }
            })

            //child state of root.admin
            .state(adminViewState = {
                name: 'root.admin.editPost',
                url: '/edit-post',
                views: {
                    'main@': {
                        templateUrl: 'views/editPost/editPost.html'
                    }
                }
            });

        // Send to the homepage if the URL was not found
        $urlRouterProvider.otherwise("/home");

    }]);
