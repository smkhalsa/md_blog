angular.module('blog', [
  'ngRoute',
  'ngMaterial',
  'firebase',
  'app.posts'
])
.config(function ($routeProvider, $mdThemingProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'app/posts/posts.html',
      controller: 'PostsController'
    })
    .otherwise({
      redirectTo: '/posts'
    })

  $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('indigo');
})
.controller('AppCtrl', function ($scope) {

});

