angular.module('blogApp')

    .controller('homeCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

      var ref = firebase.database().ref();
      var posts = ref.child('Posts');

      $scope.posts = posts;

    }]);
