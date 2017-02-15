angular.module('blogApp')
    .controller('postCtrl', ['$scope', '$firebaseArray', '$stateParams', 'Posts',
        function($scope, $firebaseArray, $stateParams, Posts) {

            var id = $stateParams.postId;
            console.log(id);
            var ref = Posts;
            var post = ref.$getRecord(id);
            $scope.post = post;



        }
    ]);
