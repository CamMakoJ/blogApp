angular.module('blogApp')

    .factory("Posts", ["$firebaseArray",
        function($firebaseArray) {
          var ref = firebase.database().ref().child('Posts');
          return $firebaseArray(ref);
        }
    ]);
