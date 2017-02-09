angular.module('blogApp')

    .factory("Posts", ["$firebaseArray",
        function($firebaseArray) {
          var ref = firebase.database().ref();
          return $firebaseArray(ref);
        }
    ]);
