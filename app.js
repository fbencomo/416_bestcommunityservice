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
   .when('/userHome', {
       templateUrl: 'pages/userHome.html',
       controller: 'userHomeController'
   })
   .when('/eventSchedule', {
       templateUrl: 'pages/eventSchedule.html',
       controller: 'eventScheduleController'
   })
   .when('/payment', {
       templateUrl: 'pages/payment.html',
       controller: 'paymentController'
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

myApp.userHomeController('userHomeController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.eventScheduleController('eventScheduleController', ['$scope', '$log', function ($scope, $log){
    
}]);

myApp.paymentController('paymentController', ['$scope', '$log', function ($scope, $log){
    
}]);

function eventClicked() {
    if(document.getElementById("eventPay").checked==true){
        document.getElementById("donPay").disabled=true;
    }
    else{
        document.getElementById("donPay").disabled=false;
    }
}

function donClicked() {
    if(document.getElementById("donPay").checked==true){
        document.getElementById("eventPay").disabled=true;
        document.getElementById("donationAmount").innerHTML="Donation Amount:<br>" +
                                                            "<input type=\"text\">" +
                                                            "<small> USD</small>";
    }
    else{
        document.getElementById("eventPay").disabled=false;
        document.getElementById("donationAmount").innerHTML="";
    }
}

function debitClicked(){
    document.getElementById("credit").checked=false;
    document.getElementById("checking").checked=false;
    document.getElementById("paymentField").innerHTML="Select Card Type:<br>" +
                                                          "<select>" +
                                                          "<option>Visa</option>" +
                                                          "<option>Master Card</option>" +
                                                          "<option>American Express</option>" +
                                                          "</select><br>" +
                                                          "Card Number:<br>" +
                                                          "<input type=\"text\"><br>" +
                                                          "Expiration Date:<br>" +
                                                          "<input type=\"date\"><br>" +
                                                          "CVC Code:<br>" +
                                                          "<input type=\"text\"><br><br>";
}

function creditClicked(){
    document.getElementById("debit").checked=false;
    document.getElementById("checking").checked=false;
    document.getElementById("paymentField").innerHTML="";
    document.getElementById("paymentField").innerHTML="Select Card Type:<br>" +
                                                          "<select>" +
                                                          "<option>Visa</option>" +
                                                          "<option>Master Card</option>" +
                                                          "<option>American Express</option>" +
                                                          "</select><br>" +
                                                          "Card Number:<br>" +
                                                          "<input type=\"text\"><br>" +
                                                          "Expiration Date:<br>" +
                                                          "<input type=\"date\"><br><br>";
}

function checkingClicked(){
    document.getElementById("debit").checked=false;
    document.getElementById("credit").checked=false;
    document.getElementById("paymentField").innerHTML="";
    document.getElementById("paymentField").innerHTML="Routing Number:<br>" +
                                                      "<input type=\"text\"><br>" +
                                                      "Account Number:<br>" +
                                                      "<input type=\"text\"><br><br>";
}
