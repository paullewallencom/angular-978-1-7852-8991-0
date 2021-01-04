angular.module('app.core').controller('SearchController', function(ShowService, $timeout){
    var vm = this;
    vm.results = false;
    vm.searching = false;
    vm.currentPage = 1;
    vm.totalResults = 0;
    vm.query = function(query) {
        vm.searching = true;
        ShowService.search(query, vm.currentPage).then(function(response){
            vm.results = response.results;
            vm.totalResults = response.total_results;
            $timeout(function(){
                vm.searching = false;
            }, 500);
        });
    };
    vm.typeahead = function(query) {
        return ShowService.search(query, 1).then(function(response){
            return response.results.map(function(show){
                return show.name;
            });
        });
    };
});
