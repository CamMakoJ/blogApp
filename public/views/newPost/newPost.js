angular.module('blogApp')

    .controller('newPostCtrl', ["$scope", "$firebaseObject", "Posts", function($scope, $firebaseObject, Posts) {

      $scope.posts = Posts;



        $scope.addPost = function () {
          //any pre-add changes (date to string)
          $scope.post.date = new Date().getTime();
          //add the post to firebase
          $scope.posts.$add({
            title: $scope.post.title,
            content: $scope.post.content,
            author: $scope.post.author,
            tags: $scope.post.tags,
            date: $scope.post.date
          });
        $scope.post = {};
        };

    }]);
