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
  $scope.moreInfo = function(dare){
    // console.log(dare);
    FactoryService.userHomeToDescription(dare);
    $window.location.href = '#description';
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

//Description controller list of completed Dares from userHome page
//Dare Description from Unfinished List of Dares "toBeDone" page
myApp.controller('DescriptionController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  $scope.dare = FactoryService.dare;
  videoLink = FactoryService.dare.fromFactory.video_link;
  $scope.code = videoLink.slice(32, 43);
  // console.log(slicedLink);
  // youTubeVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + slicedLink +'" frameborder="0" allowfullscreen></iframe>';
  // $scope.someVideo = $sce.trustAsResourceUrl(youTubeVideo);
  $scope.returnFunc = function(){
    $window.location.href='#userHome';
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
    $window.location.href = '#toBeDone';
  };
}]);

myApp.controller('CreateController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  $scope.createDare = {};
  // $scope.createDare.created_timestamp = Date();
  $scope.submitForm = function(){
    FactoryService.createFunction($scope.createDare);
    $window.location.href = '#toBeDone';
  };
}]);


myApp.controller('AdminHomeController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  FactoryService.pendingList();
  $scope.pendingArray = FactoryService.pendingListArray;
  $scope.onToJudgement = function(dare){
    // console.log(dare);
    FactoryService.pendingListToJudgement(dare);
    $window.location.href = '#judgementPage';
  };

}]);

myApp.controller('JudgementController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  console.log("You are being judged and have been found unworthy!");
  $scope.dareToJudge = FactoryService.dareToJudge;
  // console.log($scope.dareToJudge);
  $scope.returnFunc = function(){
    $window.location.href='#adminHome';
  };

  $scope.win = function(id){
    // console.log("You're getting paid.");
    FactoryService.judgementIsYes(id);
    $window.location.href='#adminHome';

  };
  $scope.lose = function(id){
    console.log("Yeah, that sucked. Do it again.");
    FactoryService.judgementIsNyet(id);
    $window.location.href='#adminHome';
  };

}]);
