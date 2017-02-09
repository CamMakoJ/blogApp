angular.module('blogApp')

    .controller('adminCtrl', ["$scope", "$firebaseObject", "Posts", function($scope, $firebaseObject, Posts) {

      $scope.posts = Posts;

        $scope.addPost = function () {
          $scope.posts.$add({
            title: $scope.post.title,
            content: $scope.post.content,
            author: $scope.post.author,
            tags: $scope.post.tags,
          });

          $scope.post = "";
        };

    }]);
