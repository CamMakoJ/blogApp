angular.module('blogApp')
    .controller('homeCtrl', ['$scope', '$firebaseArray','Posts', '$rootScope',

        function($scope, $firebaseArray, Posts, $rootScope) {

          var posts = Posts;

            $scope.posts = posts;
            console.log($rootScope.Authenticated);

        }
    ]);
