angular
    .module('app.services', [])
    .factory('Friend', function ($http) {
        return {
            get: function () {
                console.log("inside function");
                return $http.get('/api/get.json');
            }
        };
    });