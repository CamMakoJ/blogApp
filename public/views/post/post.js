angular.module('blogApp')
    .controller('postCtrl', ['$scope', '$firebaseArray', '$stateParams', 'Posts', '$rootScope',
        function($scope, $firebaseArray, $stateParams, Posts, $rootScope) {

            $scope.authenticated = $rootScope.Authenticated;
            var id = $stateParams.postId;
            var ref = Posts;

            var posts = ref.$loaded().then(function(ref) {
                var post = ref.$getRecord(id);
                $scope.post = post;
            });

            $scope.deletePost = function() {

              Posts.$remove(id);
            };
        }
    ]);
