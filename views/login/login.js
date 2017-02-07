angular.module('blogApp')

    .controller('loginCtrl', function($scope, $firebaseAuth, Auth) {


        var auth = $firebaseAuth();

        $scope.signIn = function() {
              $scope.firebaseUser = $scope.user.email + ", " + $scope.user.password;
              $scope.error = null;

              auth.$signInWithEmailAndPassword().then(function(firebaseUser) {
                $scope.firebaseUser = firebaseUser;
              }).catch(function(error){
                $scope.error = error;
              });
            };




    });
