var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

   $routeProvider
   
   .when('/', {
       templateUrl: 'pages/home.html',
       controller: 'mainController'
   })
    
   .when('/about', {
       templateUrl: 'pages/about.html',
       controller: 'aboutController'
   })
    
   .when('/contact', {
       templateUrl: 'pages/contact.html',
       controller: 'contactController'
   })
   
   .when('/classes', {
       templateUrl: 'pages/classes.html',
       controller: 'classesController'
   })
    
   .when('/events', {
       templateUrl: 'pages/events.html',
       controller: 'eventsController'
   })
    
   .when('/volunteer', {
       templateUrl: 'pages/volunteer.html',
       controller: 'volunteerController'
   })
    
   .when('/login', {
       templateUrl: 'pages/login.html',
       controller: 'loginController'
   })
    
   .when('/register', {
       templateUrl: 'pages/register.html',
       controller: 'registerController'
   })
});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.aboutController('aboutController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.classesController('classesController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.contactController('contactController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.eventsController('eventsController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.volunteerController('volunteerController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.loginController('loginController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.registerController('registerController', ['$scope', '$log', function ($scope, $log){
    
}]);

