const app = angular.module('MyApp', []);

app.controller("MyController", ['$http', function($http){
  this.foo = 'bar';
  this.complete = false;
  const controller = this;
  this.indexOfEditFormToShow = 1;

  this.getCars = function(){
    $http({
      method: 'GET',
      url: "/usedCars"
    }).then(
      function(response){
      controller.cars = response.data;
    },
    function(err){
      console.log('/usedCars GET error', err);
    }
  )};
  // //show the cars
  this.getCars();
  //
  this.createCar = function(){
    console.log('creating a car');
    $http({
      method: 'POST',
      url: '/usedCars',
      //req.body is data
      data: {
        make: this.newmake,
        imagelink: this.newimagelink,
        model: this.newmodel,
        trim: this.newtrim,
        year: this.newyear,
        color: this.newcolor,
        price: this.newprice,
        previousOwnerCount: this.previousOwnerCount
      }
    }).then(
      function(response) {
        console.log('the createCar response', response);
        //show the old and new todos
        controller.getCars();
      },
      function(err){
        console.log('/todos POST error', err);
      }
    )
  }

  this.updateCars = function(car){
    console.log('in the update');
    // this.newComplete;
    // if (car.complete) {
    //   newComplete = false;
    // } else {
    //   newComplete = true;
    // }
    $http({
      method: 'PUT',
      url: '/usedCars/' + car._id,
      //req.body is data
      data: {
        make: car.make,
        // imagelink: car.imagelink,
        // model: car.model,
        // trim: car.trim,
        // year: car.year,
        // color: car.color,
        // price: car.price,
        // previousOwnerCount: car.previousOwnerCount
      }
    }).then(
      function(response) {
        console.log('the updateTodo response', response);
        //show the old and new todos
        controller.getCars();
        // controller.description = '';
      },
      function(err){
        console.log('/usedCars POST error', err);
      }
    )

  }

  this.deleteCar = function(car){
    console.log('in the delete');
    $http({
      method: 'Delete',
      url: '/usedCars/' + car._id,
    }).then(
      function(response) {
        console.log('the updateCar response', response);
        //show the old and new todos
        controller.getCars();
        // controller.description = '';
      },
      function(err){
        console.log('/usedCars POST error', err);
      }
    )

  }

  this.editCar = function(car){
    console.log(car);
    $http({
      method: 'PUT',
      url: '/usedCars/' + car._id,
      //req.body is data
      data: {
        make: car.make,
        imagelink: car.imagelink,
        model: car.model,
        trim: car.trim,
        year: car.year,
        color: car.color,
        price: car.price,
        previousOwnerCount: car.previousOwnerCount
      }
    }).then(
      function(response) {
        console.log('the editTodo response', response);
        //show the old and new todos
        controller.getTodos();
        controller.description = '';
      },
      function(err){
        console.log('/usedCars POST error', err);
      }
    )

  }

}]);
