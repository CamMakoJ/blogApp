angular.module('blogApp')

    .factory("Auth", ["$firebaseAuth",
        function($firebaseAuth) {
          return $firebaseAuth();
        }
    ]);
