angular
    .module('app.routes', ['ngRoute'])
    .config(routes);

function routes($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/whats-on/whats-on.tpl.html',
            controller: 'WhatsOnController',
            controllerAs: 'whatsOn'
        })
        .when('/my-shows', {
            templateUrl: 'sections/my-shows/my-shows.tpl.html',
            controller: 'MyShowsController',
            controllerAs: 'myShows'
        })
        .when('/search', {
            templateUrl: 'sections/search/search.tpl.html',
            controller: 'SearchController',
            controllerAs: 'search'
        })
        .when('/show/:id', {
            templateUrl: 'sections/show/show.tpl.html',
            controller: 'ShowController',
            controllerAs: 'show'
        })
        .otherwise({
            redirectTo: '/'
        });
}