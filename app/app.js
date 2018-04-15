let App = angular.module('App', [
  'rootCtrl',
  ])

let rootCtrl = angular.module('rootCtrl', []);

rootCtrl.controller("rootCtrl", ($scope) => {
    console.log("+++ 6 app.js rootCtrl activated!")
    let hello = ['HELLO!', 'HOW', 'ARE', 'YOU?']

    $scope.list = [];

    _.forEach(hello, (item) => {
        $scope.list.push(item)
    })
})