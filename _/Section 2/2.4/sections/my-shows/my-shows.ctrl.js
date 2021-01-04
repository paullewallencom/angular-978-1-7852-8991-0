angular.module('app.core').controller('MyShowsController', function(StoreFactory){
    var vm = this;

    vm.results = StoreFactory.getShows();

    vm.unTrackShow = function(id) {
        StoreFactory.removeShow(id);
    };

});
