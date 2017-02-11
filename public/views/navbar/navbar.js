angular.module('blogApp')

    .controller('navbarCtrl', ["$scope", "$state", function($scope, $state) {

        //grabs the name of the state and feeds it to the navbar so that it shows up on load
        var openState = $state.current.name.substring($state.current.name.lastIndexOf('.')+1);
        $scope.currentNavItem = openState;


    }]);
