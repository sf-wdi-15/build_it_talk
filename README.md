# Build It
## Angular

Today I want us to build a few projects using *GitHub* pages.

## Simple Todo App

Let's start a simple Todo App that we can deploy to GitHub pages.

* Let's make start our application by making a GitHub repo for our project -- call it `simple-todo`.
* Clone your git repository and switch into it.


Setting up our project repo.

* We will need an `index.html` that will serve as our root view.
* We will also need a `public` for our assets.
  * a `public/javascripts` folder for our javascripts
  * a `public/sytlesheets` folder for our stylesheets.
  * a `public/images` folder for our images.
* Let's also make a `views/` folder for templates.

## Bower

Adding third party components with Bower will be pretty straight forward.

```bash
$ npm install -g bower
```

next we can use `bower init` to initialize a new application

```bash
$ bower init
```

We can install our package dependencies now using `bower install <package> --save`

These pacakages will be saved to a `bower_components/` folder by default.

```bash
$ bower install angular --save
```

## Angular Router

Let's also install the `angular-route` package.

```bash
$ bower insall angular-route --save
```

This is good enough for now. We shouldn't need to install anymore dependencies.

## index.html

Let's setup the basics for our `index.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Simple Todo</title>
    
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="public/javascripts/app.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

We will need an `app.js` file to setup our application.

`public/javascripts/app.js`

```javascripts

var TodoApp = angular.module("TodoApp", []);

TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.greeting = "hello world";
}]);

```

Let's update our `index.html`.

```html
...
<body ng-app="TodoApp">
  <div ng-controller="TodosCtrl">
    <h1>{{ greeting }}</h1>
  </div>
</body>
...
```

Let's see your application up and running.

```bash
$ python -m SimpleHTTPServer
```

Go to [localhost:8000](localhost:8000).

## Todos

Let's add some application logic to handle interactions from our todo list.

```javascript

var TodoApp = angular.module("TodoApp", []);

TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos    = [];
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

}]);

```

Let's update our `index.html`.


```html

<body ng-app="TodoApp">
  <div ng-controller="TodosCtrl">
    <form ng-submit="addTodo()">
      <div>
        <textarea ng-model="newTodo.content"></textarea>
      </div>
      <div>
        <button>Add Todo</button>
      </div>
    </form>
    <div>

      <div ng-repeat="todo in todos track by $index">
        <div>
          {{todo.content}}
        </div>
        <div>
          <button ng-click="delete()">Delete</button><button ng-click="edit()">Edit</button>
        </div>
      </div>

    </div>
  </div>
</body>
```

Note that we should be adding new todos properly now. Let's add the ability to `edit` or `delete` a `todo`.

```javascript


var TodoApp = angular.module("TodoApp", []);

TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos    = [];
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete   = function () {
    var index = $scope.todos.indexOf(this.todo);
    $scope.todos.splice(index, 1);
  };
}]);


```

That should enable us to `delete` a todo. Let's try to edit a `Todo`.


```javascript

var TodoApp = angular.module("TodoApp", []);

TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos    = [];
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
}]);


```

Let' try adding an edit form to our view to edit the todo.



```html

<body ng-app="TodoApp">
  <div ng-controller="TodosCtrl">
    <form ng-submit="addTodo()">
      <div>
        <textarea ng-model="newTodo.content"></textarea>
      </div>
      <div>
        <button>Add Todo</button>
      </div>
    </form>
    <div>

      <div ng-repeat="todo in todos track by $index">
        <div ng-hide="editing">
          {{todo.content}}
        </div>

        <form ng-submit="update()" ng-show="editing">
          <textarea ng-model="todo.content"></textarea>
          <div>
            <button>Update</button>
          </div>
        </form>

        <div ng-hide="editing">
          <button ng-click="delete()">Delete</button><button ng-click="edit()">Edit</button>
        </div>
      </div>

    </div>
  </div>
</body>
```

Let's add the update functionality

```javascript

$scope.update = function (){
 this.editing = false;
};
```



Go view your application at [localhost:8000](localhost:8000). Be sure to run `python -m SimpleHTTPServer`.

## Deploying To GitHub pages

To make a github page we need to do the following.


```
git add . -A
git commit -m "simple todo app"
git checkout -b gh-pages
git push origin gh-pages
git checkout master
git push origin master
```

You might want to add a readme with a link to your github page.



## Add Bootstrap

First install

```bash
$ bower install bootstrap --save
```

and  in our `index.html` in your head...

```html
<link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet"/>
```

make sure you have the `viewport` settings for bootstrap in your head.

```html

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simple Todo</todo>

```





























