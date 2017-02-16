angular.module('blogApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', 'Auth', '$rootScope',
        function($scope, $firebaseAuth, Auth, $rootScope) {

            $scope.authenticated = $rootScope.Authenticated;
            $scope.auth = Auth;

            // any time auth state changes, add the user data to scope
            $scope.auth.$onAuthStateChanged(function(firebaseUser) {
                $scope.firebaseUser = firebaseUser;
                $rootScope.Authenticated = $scope.firebaseUser;
            });

        }
    ]);
