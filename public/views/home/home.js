angular.module('blogApp')
    .controller('homeCtrl', ['$scope', '$firebaseArray','Posts', '$rootScope',

        function($scope, $firebaseArray, Posts, $rootScope) {
          $scope.authenticated = $rootScope.Authenticated;
          var posts = Posts;
            $scope.posts = posts;
        }
    ]);
