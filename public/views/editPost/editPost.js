angular.module('blogApp')

    .controller('editPostCtrl', ["$scope", "$firebaseObject", "Posts", "$rootScope",
        function($scope, $firebaseObject, Posts, $rootScope) {

            $scope.authenticated = $rootScope.Authenticated;
            $scope.posts = Posts;

            $scope.updatePost = function (key) {
              var post = $scope.posts.$getRecord(key);

              $scope.posts.$save(post).then(function(){
                var post = $scope.posts.$getRecord(key);
              });
            };



/*
            $scope.addPost = function() {
                //any pre-add changes (date to string, removed for edit post)

                //add the post to firebase
                $scope.posts.$save({
                    title: $scope.post.title,
                    content: $scope.post.content,
                    author: $scope.post.author,
                    tags: $scope.post.tags,
                    date: $scope.post.date
                });
                $scope.post = {};
            };
            */

        }
    ]);
