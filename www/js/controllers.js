angular.module('starter.controllers', [])

//Home
.controller('DashCtrl', function($scope) {})
//Autor
.controller('autorCtrl', function($scope) {
      $scope.autor = {
      name: 'Oscar Eduardo Quintanilla Hernández',
      id:'QH100217',
      email: 'ia.oscar895@ufg.edu.sv',
      git: '@owqh',
      phone: '(503) 2222-222'
      }})

//Menu
.controller('menuCtrl', function($scope, Menus) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
})
//detalle menu
.controller('menuDetailCtrl', function($scope, $stateParams, Menus) {
  $scope.menu = Menus.get($stateParams.menuId);
})
//detalle comanda
.controller('comandaDetailCtrl', function($scope, $stateParams, Comandas) {
  $scope.comanda = Comandas.get($stateParams.comandaId);
})
//Comanda
.controller('comandaCtrl', function($scope, Comandas) {
  $scope.comandas = Comandas.all();
});
