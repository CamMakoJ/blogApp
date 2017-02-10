angular.module('blogApp')
  .controller('homeCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {

        var ref = firebase.database().ref().child('Posts');
        var posts = $firebaseArray(ref);

        $scope.posts = posts;

    }
]);
