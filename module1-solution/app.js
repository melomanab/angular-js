(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

$scope.checkLunch = function(){
    // Reinitialise variables
    $scope.msg = ""
    var items = ""

    // Check empty input
    if ($scope.input == null || $scope.input == ""){
        $scope.msg = 'Please enter data first'
        return
    }

    // Process input into items if not empty
    items = ($scope.input).split(',')

    if (items.length <= 3){
        $scope.msg = 'Enjoy!'
    }

    if (items.length > 3){
        $scope.msg =  'Too much!'
    }
};

}

})();