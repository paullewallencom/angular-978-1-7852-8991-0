angular
    .module('app.services')
    .factory('StoreFactory', dataService);

function dataService(localStorageService) {

    var _shows = [];

    var ls = localStorageService.get('store');
    if (ls !== null) {
        _shows = ls;
    }

    var service = {
        'addShow': addShow,
        'getShow': getShow,
        'getShows': getShows,
        'removeShow': removeShow
    };

    function addShow(data) {
        _shows.push(data);
        save();
    }

    function getShow(id) {
        var result = false;
        angular.forEach(_shows, function(show){
            if (result === false) {
                if (show.id === id) {
                    result = show;
                }
            }
        });
        return result;
    }

    function getShows() {
        return _shows;
    }

    function removeShow(id) {
        var idx = -1;
        var found = false;
        angular.forEach(_shows, function(show){
            if (found === false) {
                if (show.id === id) {
                    found = true;
                }
                idx++;
            }
        });
        if (found === true) {
            _shows.splice(idx, 1);
            save();
        }
    }

    function save() {
        localStorageService.set('store', _shows);
    }

    return service;
}