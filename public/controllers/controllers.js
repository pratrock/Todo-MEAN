function TodoController($scope, $http) {
  let refresh = function () {
    $http.get("/todos").success(function (response) {
      console.log(response);
      $scope.todolist = response;
      $scope.todos = "";
    });
  };
  refresh();

  $scope.addTodo = function () {
    const todolist = {
      todo: $scope.todos.todo,
      isTodo: true,
      progress: false,
      completed: false,
    };
    $http.post("/addTodos", todolist).success(function (response) {
      console.log(response);
      refresh();
    });
  };

  $scope.changeProgress = function (todos) {
    const { _id: id, todo } = todos;
    $http.put(`/changeProgress/${id}`).success(function (response) {
      refresh();
    });
  };

  $scope.changeDone = function (todos) {
    const { _id: id, todo } = todos;
    $http.put(`/changeDone/${id}`).success(function (response) {
      refresh();
    });
  };

  $scope.changeTodo = function (todos) {
    const { _id: id, todo } = todos;
    $http.put(`/changeTodo/${id}`).success(function (response) {
      refresh();
    });
  };

  $scope.deleteTodo = function (todos) {
    const { _id: id, todo } = todos;
    $http.put(`/deleteTodo/${id}`).success(function (response) {
      refresh();
    });
  };

  $scope.editTodo = function (todolist) {
    const { _id: id, todo } = todolist;
    console.log(id);
    $http.get(`/getTodo/${id}`).success(function (response) {
      $scope.todos = response;
    });
  };

  $scope.update = function () {
    console.log($scope.todos);
    $http
      .put(`/updateTodo/${$scope.todos._id}`, $scope.todos)
      .success(function (response) {
        refresh();
      });
  };

  /*  $scope.editTodo = function (todo) {
    const { _id: id, todo } = todo;
    console.log(id);
      $http.get(`/getTodo/${id}`).success(function (response) {
      $scope.todos = response;
    }); 
  }; */
}
