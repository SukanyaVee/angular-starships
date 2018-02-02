angular.module('pokemon', ['ui.router']);

angular.module('pokemon').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state ('home', {
        url:'/',
        // template: '<h3>Home</h3>'
        templateUrl:'./app2/views/home.html'
    });
    $stateProvider.state('characters', {
        url:'/characters',
        // template: '<h3>Characters</h3>'
        templateUrl: './app2/views/characters.html',
        controller: 'characterCtrl'
    });
    $stateProvider.state('character', {
        url: '/characters/:id',
        templateUrl: './app2/views/char.html',
        controller: 'charCtrl',
    })
    $urlRouterProvider.otherwise('/');
})

