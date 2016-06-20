(function() {
    'use strict';
    var long
    var lat
    angular
        .module('controllers')
        .controller('TrainController', TrainController);

    function TrainController($http) {

        var vm = this;

        vm.newTrain = {};

        vm.setTrain = function(currentTrain){
            if(vm.currentTrain != currentTrain) {
                vm.currentTrain = currentTrain;
                long = (currentTrain.geoLong);
                lat = (currentTrain.geoLat);
                vm.map.center = {latitude: lat, longitude: long};
            }
            else
                vm.currentTrain = undefined;

        };

        //vm.createStudent = function(){
        //    vm.allTrains.push(
        //        {
        //            name: vm.newTrain.name,
        //            age: vm.newTrain.age
        //        });
        //
        //    vm.newTrain = {};
        //};


        vm.allTrains = [
        ];



        $http.get('data/trainstations.json').then(function(stations,lang){
            vm.allTrains = stations.data;
        });



        vm.map = {center: {latitude: 51, longitude: 6}, zoom: 15};

    }


})();

