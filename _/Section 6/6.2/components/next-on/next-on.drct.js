angular.module('app.core').directive('nextOn', function(StoreFactory, ShowService){
    return {
        templateUrl: 'components/next-on/next-on.tpl.html',
        restrict: 'E',
        scope: {
            limit: '@'
        },
        controller: function($scope) {
            //Get todays date
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            $scope.nextEpisodes = [];
            //Loop through each show in My Shows
            angular.forEach(StoreFactory.getShows(), function (show) {
                //Get show information
                ShowService.get(show.id).then(function (showResponse) {
                    //If this show is still in production
                    if (showResponse.in_production === true) {
                        //Get the latest season information
                        var seasonNumber = (showResponse.seasons.length > 1) ? (showResponse.seasons.length - 1) : 1;
                        ShowService.getSeason(show.id, seasonNumber).then(function (response) {
                            //Loop through each episode in the latest season
                            angular.forEach(response.episodes, function (episode) {
                                if (episode.name != "") {
                                    var date = new Date(episode.air_date);
                                    //If the air date is greater than today save the episode
                                    if (date >= today) {
                                        //Add the show name and image
                                        episode.showName = show.name;
                                        episode.showImage = show.backdrop_path;
                                        episode.homepage = showResponse.homepage;
                                        $scope.nextEpisodes.push(episode);
                                    }
                                }
                            });
                        });
                    }
                });
            });
        }
    };
});