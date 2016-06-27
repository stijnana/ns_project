(function() {
    'use strict';
    angular
        .module('controllers')
        .controller('TrainController', TrainController);

    function TrainController(TrainService) {

        var vm = this;

        vm.newTrain = {};

        vm.setTrain = function(currentTrain){
            if(vm.currentTrain != currentTrain) {
                vm.currentTrain = currentTrain;
                vm.map.center = {latitude: currentTrain.geoLat, longitude: currentTrain.geoLong};
                vm.map.zoom=15;
            }
            else {
                vm.currentTrain = undefined;
                vm.centerMap();
            }

        };


        vm.allTrains = TrainService.allTrains;

        vm.centerMap = function(){
            vm.map = {center: {latitude: 52, longitude: 5.5}, zoom: 7};
        };
        vm.centerMap();




    }


})();

