const app = angular.module('MyApp', []);

app.controller("MyController", ['$http', function($http){
  this.foo = 'bar';
  this.complete = false;
  const controller = this;
  this.indexOfEditFormToShow = 1;

  this.getTodos = function(){
  //   $http({
  //     method: 'GET',
  //     url: "/todos"
  //   }).then(
  //     function(response){
  //     controller.todos = response.data;
  //   },
  //   function(err){
  //     console.log('/todos GET error', err);
  //   }
  // )};
  // //show the todos
  // this.getTodos();
  //
  // this.createTodo = function(){
  //   console.log('creating a todo');
  //   $http({
  //     method: 'POST',
  //     url: '/todos',
  //     //req.body is data
  //     data: {
  //       description: this.description,
  //       complete: this.complete
  //     }
  //   }).then(
  //     function(response) {
  //       console.log('the createTodo response', response);
  //       //show the old and new todos
  //       controller.getTodos();
  //     },
  //     function(err){
  //       console.log('/todos POST error', err);
  //     }
  //   )
  }

  // this.updateTodo = function(todo){
  //   console.log('in the update');
  //   this.newComplete;
  //   if (todo.complete) {
  //     newComplete = false;
  //   } else {
  //     newComplete = true;
  //   }
  //   $http({
  //     method: 'PUT',
  //     url: '/todos/' + todo._id,
  //     //req.body is data
  //     data: {
  //       description: todo.description,
  //       complete: newComplete
  //     }
  //   }).then(
  //     function(response) {
  //       console.log('the updateTodo response', response);
  //       //show the old and new todos
  //       controller.getTodos();
  //       controller.description = '';
  //     },
  //     function(err){
  //       console.log('/todos POST error', err);
  //     }
  //   )
  //
  // }
  //
  // this.deleteTodo = function(todo){
  //   console.log('in the delete');
  //   $http({
  //     method: 'Delete',
  //     url: '/todos/' + todo._id,
  //   }).then(
  //     function(response) {
  //       console.log('the updateTodo response', response);
  //       //show the old and new todos
  //       controller.getTodos();
  //       controller.description = '';
  //     },
  //     function(err){
  //       console.log('/todos POST error', err);
  //     }
  //   )
  //
  // }
  //
  // this.editTodo = function(todo){
  //   console.log(todo);
  //   $http({
  //     method: 'PUT',
  //     url: '/todos/' + todo._id,
  //     //req.body is data
  //     data: {
  //       description: this.updatedescription,
  //       complete: todo.complete
  //     }
  //   }).then(
  //     function(response) {
  //       console.log('the editTodo response', response);
  //       //show the old and new todos
  //       controller.getTodos();
  //       controller.description = '';
  //     },
  //     function(err){
  //       console.log('/todos POST error', err);
  //     }
  //   )
  //
  // }

}]);
