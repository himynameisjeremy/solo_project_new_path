myApp.controller('UserController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
    // $scope.userName;
    // $scope.id;
    // $scope.first_name;
    FactoryService.userStart();

    $scope.user = FactoryService.user;
}]);

myApp.controller('UserHomeController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  FactoryService.dareList();
  $scope.dareArray = FactoryService.dareListArray;
  $scope.isUserAdmin = FactoryService.user.response.admin_status;
  // console.log(FactoryService.user.response);
  $scope.doAdminStuff = function(){
    $window.location.href = '#adminHome';
  };
}]);

myApp.controller('UnfinishedController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  FactoryService.unfinishedList();
  $scope.unfinishedArray = FactoryService.unfinishedListArray;
  $scope.moreInfo = function(dare){
    // console.log(dare);
    FactoryService.unfinishedListToDareDescription(dare);
    $window.location.href = '#dareDescription';
  };
}]);

//Dare Description from Unfinished List of Dares "toBeDone" page
myApp.controller('DareDescriptionController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  $scope.dare = FactoryService.dare;
  // console.log($scope.dare);
  $scope.returnFunc = function(){
    $window.location.href='#toBeDone';
  };
  $scope.conquered = function(){
    // console.log("Yeeeeehaw!");
    $window.location.href='#submitVideo';
  };
}]);

myApp.controller('SubmitVideoController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  // console.log("Submitting video, baby!");
  // $scope.createDare = {};
  // id = FactoryService.dare.fromFactory.id;
  // console.log(FactoryService.dare.fromFactory.id);
  // $scope.submitVideo = function(){
  //   // console.log("I'm submitting a video!");
  //   FactoryService.createVideoFunction(id, $scope.createDare);
  //   // $window.location.href = '#toBeDone';
  // };
  $scope.createDare = {};
  $scope.createDare.id = FactoryService.dare.fromFactory.id;
  console.log(FactoryService.dare.fromFactory.id);
  $scope.submitVideo = function(){
    // console.log("I'm submitting a video!");
    FactoryService.createVideoFunction($scope.createDare);
    // $window.location.href = '#toBeDone';
  };
}]);

myApp.controller('CreateController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  $scope.createDare = {};
  $scope.submitForm = function(){
    FactoryService.createFunction($scope.createDare);
    $window.location.href = '#toBeDone';
  };
}]);


myApp.controller('AdminHomeController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  FactoryService.pendingList();
  $scope.pendingArray = FactoryService.pendingListArray;
  $scope.moreInfo = function(dare){
    // console.log(dare);
    FactoryService.pendingListToJudgement(dare);
    $window.location.href = '#judgementPage';
  };

}]);
