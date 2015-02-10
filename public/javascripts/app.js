var TodoApp = angular.module("TodoApp", []);

TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos = [];
  $scope.newTodo = {};

  $scope.addTodo = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete = function () {
    var index = $scope.todos.indexOf(this.todo);
    $scope.todos.splice(index, 1);
  };

  $scope.edit = function () {
    this.editing = true;
  };

  $scope.update = function () {
    this.editing = false;
  };

}]);
