angular.module('app', [
    // Vendor
    'ui.router',
    'ct.ui.router.extras',
    'ngAnimate',
    'ngResource',
    'ngSanitize',

    // App
    'templates',
    'states',
    'services',

    // Features
    'home'
    
    // Patterns
])

    .config(function() {

    })

    .controller('appController', function ($scope) {
        $scope.hello = 'hello world';
        
        $scope.title = "title";
        $scope.$on('$stateChangeSuccess', function(e, toState) {
            $scope.title = toState.name?$filter('titlecase')(toState.name) + ' | title':'title';
        });
    });

