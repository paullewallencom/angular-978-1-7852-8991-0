angular.module('app.core').controller('MyShowsController', function(StoreFactory){
    var vm = this;
    vm.results = StoreFactory.getShows();
});
