angular.module('blogApp')

    .controller('loginCtrl', function($scope, $firebaseAuth, Auth) {

        $scope.auth = Auth;

        // any time auth state changes, add the user data to scope
        $scope.auth.$onAuthStateChanged(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
            console.log($scope.firebaseUser);
        });
    });
