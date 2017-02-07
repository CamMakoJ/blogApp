angular.module('blogApp')

    .controller('loginCtrl', function($scope) {

        $scope.signIn = function() {
            var email = $scope.user.email;
            var password = $scope.user.password;

            //Auth logic will go here
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        };

        $scope.signOut = function() {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log('signed out');
            }, function(error) {
                // An error happened.
            });
        };

    });
