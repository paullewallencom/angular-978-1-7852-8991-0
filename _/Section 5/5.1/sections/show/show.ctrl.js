angular.module('app.core').controller('ShowController', function(data, seasons, ShowService){
    var vm = this;
    vm.data = data;
    vm.newEntry = {};
    vm.seasons = seasons;
    vm.episodes = [];
    vm.gettingEpisodes = false;
    vm.getEpisodes = function() {
        vm.gettingEpisodes = true;
        ShowService.getSeason(vm.data.id, vm.newEntry.seasonNumber).then(function(response){
            vm.episodes = response.episodes;
            vm.gettingEpisodes = false;
        });
    };
    vm.saveEntry = function() {
        if (vm.data.diary_entries == undefined) {
            vm.data.diary_entries = [];
        }
        vm.newEntry.date = new Date();
        vm.data.diary_entries.push(vm.newEntry);
        vm.newEntry = {};
    };
    vm.removeEntry = function($index) {
        vm.data.diary_entries.splice($index, 1);
    };
});
