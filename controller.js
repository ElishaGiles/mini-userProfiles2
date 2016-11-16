angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
    var promise = mainService.getUsers();

    promise.then(function(response) {
      if(response.status === 200) {
      $scope.users = response.data.data;
      $scope.noData = null;
    } else {
      $scope.noData = "There was an error!"
    }
    });
  }
  $scope.getUsers();
});
