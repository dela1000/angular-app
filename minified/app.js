let App = angular.module('App', [
  'rootCtrl',
  ])

let rootCtrl = angular.module('rootCtrl', []);

rootCtrl.controller("rootCtrl", ($scope) => {
    console.log("+++ 6 app.js rootCtrl activated!")
    let list = ['HELLO!', 'HOW', 'ARE', 'YOU?']

    $scope.hello = [];

    _.forEach(list, (item) => {
        $scope.hello.push(item)
    })
})