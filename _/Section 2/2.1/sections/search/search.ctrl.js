angular.module('app.core').controller('SearchController', function(ShowService){
    var vm = this;
    vm.query = function(query) {
        ShowService.search(query).then(function(response){
            console.log(response);
        }).catch(function(error){

        });
    };
});
