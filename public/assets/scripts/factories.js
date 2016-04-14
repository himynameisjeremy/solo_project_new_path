myApp.factory("FactoryService", ["$http", function($http){
  var user = {};
  var dareListArray = {};
  var unfinishedListArray = {};
  var dare = {};
  var pendingListArray = {};
  var dareToJudge = {};

  var userStart = function(){
    $http.get('/user').then(function(response) {
        if(response.data) {
          // $scope.userName = response.data.username;
          // $scope.id = response.data.id;
          // $scope.first_name = response.data.first_name;
          user.response = response.data;
          console.log('User Data: ', user);
        } else {
          $window.location.href = '/index.html';
        }
    });
  };

//dareList will populate user home.  It will have newly created and recently completed dares on its feed.
  var dareList = function(){
    $http.get('/darelist').then(function(response){
      console.log("Console Log in dareList : ", response.data);
      dareListArray.response = response.data;
    });
  };

//unfinishedList will contain dares that have not been completed yet.  This will be shown on Uncompleted Dares page.
  var unfinishedList = function(){
    $http.get('/unfinishedList').then(function(response){
      console.log("Console Log in unfinishedList: ", response.data);
      unfinishedListArray.response = response.data;
    });
  };

//this will send the dares from the creation form to be posted in the SQL database.
  var createFunction = function(data){
    $http.post('/create', data).then(function(request){
      //posts to SQL database, but idk why it is sending full html page
    });
  };

  var unfinishedListToDareDescription = function(dare1){
    console.log(dare1);
    dare.fromFactory = dare1;
    // return dare;
  };

  var createVideoFunction = function(update){
    $http.post('/submitVideo', update).then(function(request){
      console.log(update);
    });
  };

  var pendingList = function(){
    $http.get('/pendingList').then(function(response){
      console.log("Console Log in pendingList: ", response.data);
      pendingListArray.response = response.data;
    });
    // console.log("In pendingList function!");
  };

  var pendingListToJudgement = function(dare){
    console.log(dare);
    dareToJudge.fromFactory = dare;
  };

  var judgementIsYes = function(id){
    var objectToSend = {};
    objectToSend.id = id;
    $http.post('/judgementIsYes', objectToSend).then(function(request){
      console.log(objectToSend.id);
    });
  };

  var judgementIsNyet = function(id){
    var objectToSend = {};
    objectToSend.id = id;
    $http.post('/judgementIsNyet', objectToSend).then(function(request){
      console.log(objectToSend.id);
    });
  };


  return {
    userStart : userStart,
    user : user,
    dareList : dareList,
    unfinishedList : unfinishedList,
    createFunction : createFunction,
    dareListArray : dareListArray,
    unfinishedListArray : unfinishedListArray,
    unfinishedListToDareDescription : unfinishedListToDareDescription,
    dare : dare,
    createVideoFunction : createVideoFunction,
    pendingList : pendingList,
    pendingListArray : pendingListArray,
    pendingListToJudgement : pendingListToJudgement,
    dareToJudge : dareToJudge,
    judgementIsYes : judgementIsYes,
    judgementIsNyet : judgementIsNyet
  };
}]);
