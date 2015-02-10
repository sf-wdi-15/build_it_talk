var TodoApp = angular.module("TodoApp", [
  "ngRoute"
]);

TodoApp.config(["$routeProvider", "$locationProvider",
  function ($routeProvider, $locationProvider){
    $routeProvider.
      when("/cool_todos", {
        templateUrl: "views/root.html",
        controller: "TodosCtrl"
      }).
      when("/", {
        templateUrl: "views/root.html",
        controller: "TodosCtrl"
      });
  }])

TodoApp.service("Todos", Array);

TodoApp.controller("TodosCtrl", ["$scope", "Todos", function ($scope, Todos) {
  $scope.todos    = Todos;
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete   = function () {
    var index = $scope.todos.indexOf(this.todo);
    $scope.todos.splice(index, 1);
  };

  $scope.edit     = function () {
    this.editing = true;
  };

  $scope.update   = function () {
    this.editing = false;
  };
}]);
