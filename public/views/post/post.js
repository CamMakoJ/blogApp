angular.module('blogApp')
    .controller('postCtrl', ['$scope', '$firebaseArray', '$stateParams', 'Posts',
        function($scope, $firebaseArray, $stateParams, Posts) {

            var id = $stateParams.postId;
            console.log(id);
            var ref = Posts.$loaded().then(function(ref){
              var post = ref.$getRecord(id);
                $scope.post = post;
            });
        }
    ]);
