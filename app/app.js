let App = angular.module('App', [
  'rootCtrl',
  ])

let rootCtrl = angular.module('rootCtrl', []);

rootCtrl.controller("rootCtrl", ($scope) => {
    console.log("+++ 6 app.js rootCtrl activated!")
    $scope.hello = 'HELLO!'
})