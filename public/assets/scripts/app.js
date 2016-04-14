var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/userHome", {
            templateUrl: "/views/loggedInViews/userHome.html",
            controller: "UserHomeController"
        }).
        when("/toBeDone", {
            templateUrl: "/views/loggedInViews/toBeDone.html",
            controller: "UnfinishedController"
        }).
        when("/create", {
            templateUrl: "/views/loggedInViews/create.html",
            controller: "CreateController"
        }).
        when("/description", {
            templateUrl: "/views/loggedInViews/description.html",
            // controller: "DescriptionController"
        }).
        when("/dareDescription", {
            templateUrl: "/views/loggedInViews/dareDescription.html",
            controller: "DareDescriptionController"
        }).
        when("/submitVideo", {
            templateUrl: "/views/loggedInViews/submitVideo.html",
            controller: "SubmitVideoController"
        }).
        when("/adminHome", {
            templateUrl: "/views/loggedInViews/adminHome.html",
            controller: "AdminHomeController"
        }).
        when("/judgementPage", {
            templateUrl: "/views/loggedInViews/judgementPage.html",
            controller: "JudgementController"
        }).
        otherwise({
            redirectTo: "/userHome"
        });
}]);
