// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  // Each tab has its own nav history stack:
  //Login
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  //Inicio
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    //Menu
  .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-menu': {
          templateUrl: 'templates/tab-menu.html',
          controller: 'menuCtrl'
        }
      }
    })

  //Detalle de menu
    .state('tab.menu-detail', {
      url: '/menu/:menuId',
      views: {
        'tab-menu': {
          templateUrl: 'templates/menu-detail.html',
          controller: 'menuDetailCtrl'
        }
      }
    })


//Autor
  .state('tab.autor', {
      url: '/autor',
      views: {
        'tab-autor': {
          templateUrl: 'templates/tab-autor.html',
          controller: 'autorCtrl'
        }
      }
    })
  
      //Detalle de comandas
    .state('tab.comanda-detail', {
      url: '/comanda/:comandaId',
      views: {
        'tab-comanda': {
          templateUrl: 'templates/comanda-detail.html',
          controller: 'comandaDetailCtrl'
        }
      }
    })
//Comandas
  .state('tab.comanda', {
    url: '/comanda',
    views: {
      'tab-comanda': {
        templateUrl: 'templates/tab-comanda.html',
        controller: 'comandaCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');

});
