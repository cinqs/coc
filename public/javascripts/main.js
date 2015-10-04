var app = angular.module('homepage', []);
app.controller('hpctrl', function($scope, $http) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.sendServer = function(newnews){
    	$http.post('/newspost', {newspost:newnews});
    };
});