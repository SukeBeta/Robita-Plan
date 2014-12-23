// Yunen He 2014 (SukeBeta)

var planApp = angular.module("planApp", ['ngMaterial']);

planApp.controller("planAppCtrl", ['$scope','$http', function($scope, $http)
{

}]);

planApp.controller("sidebarCtrl", ['$scope','$mdSidenav', function($scope, $mdSidenav)
{
    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    };

    $scope.close = function (){
        $mdSidenav('left').close()
    };
}]);

planApp.controller("todoListCtrl", ['$scope', '$http', function($scope, $http)
{
    // get todo data;
    $http.get('data/data.json').success(function (data){
        $scope.todoData = data;
    });
}]);
