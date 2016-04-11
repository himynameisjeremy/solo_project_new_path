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
}]);

myApp.controller('UnfinishedController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  FactoryService.unfinishedList();
  $scope.unfinishedArray = FactoryService.unfinishedListArray;
}]);

myApp.controller('CreateController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
  $scope.createDare = {};
  $scope.submitForm = function(){
    FactoryService.createFunction($scope.createDare);
    $window.location.href = '#toBeDone';
  };
}]);
