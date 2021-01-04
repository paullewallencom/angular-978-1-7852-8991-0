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
            controllerAs: 'show',
            resolve: {
                data: function(StoreFactory, $route, $location) {
                    var res = StoreFactory.getShow($route.current.params.id);
                    if (res !== false) {
                        return res;
                    } else {
                        //Show does not exist
                        $location.path('/404');
                    }
                },
                seasons: function(ShowService, $route) {
                    return ShowService.get($route.current.params.id).then(function(response){
                        return response.seasons;
                    })
                }
            }
        })
        .when('/404', {
            templateUrl: 'sections/404/404.tpl.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
}