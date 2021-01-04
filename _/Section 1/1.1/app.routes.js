angular
    .module('app.routes', ['ngRoute'])
    .config(routes);

function routes($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/whats-on/whats-on.tpl.html'
        })
        .when('/my-shows', {
            templateUrl: 'sections/my-shows/my-shows.tpl.html'
        })
        .when('/search', {
            templateUrl: 'sections/search/search.tpl.html'
        })
        .when('/show/:id', {
            templateUrl: 'sections/show/show.tpl.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}