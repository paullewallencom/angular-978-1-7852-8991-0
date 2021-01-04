angular.module('app.core').controller('SearchController', function(ShowService, $timeout){
    var vm = this;
    vm.results = false;
    vm.searching = false;
    vm.query = function(query) {
        vm.searching = true;
        ShowService.search(query).then(function(response){
            vm.results = response;
            $timeout(function(){
                vm.searching = false;
            }, 500);
        });
    };
    vm.typeahead = function(query) {
        return ShowService.search(query).then(function(response){
            return response.map(function(show){
                return show.name;
            });
        });
    };
});
