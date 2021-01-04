angular.module('app.core').directive('minWords', function() {
    return {
        restrict: 'A',
        scope: {
            minWords: "="
        },
        require: 'ngModel',
        link: function($scope, $element, $attrs, $ctrl) {
            $ctrl.$validators.minWords = function(modelValue) {
                if (modelValue != undefined) {
                    var words = modelValue.split(' ');
                    if (words.length >= ($scope.minWords || 5)) {
                        return true;
                    }
                }
                return false;
            }
        }
    };
});