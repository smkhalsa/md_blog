angular.module('app.posts', ['firebase'])
  
  .controller('PostsController', function($scope, $firebaseArray) {
    var ref = new Firebase("https://satkhalsa.firebaseio.com/posts");

    $scope.posts = $firebaseArray(ref);
  })