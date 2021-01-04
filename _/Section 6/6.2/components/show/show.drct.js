angular.module('app.core').directive('showOverview', function(StoreFactory){
    return {
        templateUrl: 'components/show/show.tpl.html',
        restrict: 'E',
        scope: {
            show: '=',
            showRating: '=',
            showDiary: '='
        },
        controller: function($scope) {
            $scope.trackShow = function(show) {
                StoreFactory.addShow(show);
            };
            $scope.unTrackShow = function(id) {
                StoreFactory.removeShow(id);
            };
            $scope.hasShow = function(id) {
                return (StoreFactory.getShow(id) !== false);
            };
        }
    };
});