(function() {
    'use strict';
    var lang

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController($http) {

        var vm = this;

        vm.newStudent = {};

        vm.setStudent = function(currentStudent){
            if(vm.currentStudent != currentStudent) {
                vm.currentStudent = currentStudent;
                lang = (currentStudent.geoLong);
                vm.map.center = {latitude: 50, longitude: lang};
            }
            else
                vm.currentStudent = undefined;

        };

        vm.createStudent = function(){
            vm.allStudents.push(
                {
                    name: vm.newStudent.name,
                    age: vm.newStudent.age
                });

            vm.newStudent = {};
        };


        vm.allStudents = [
        ];



        $http.get('data/trainstations.json').then(function(stations,lang){
            vm.allStudents = stations.data;
            //console.table(stations.data);
            //console.log(stations.data[1].geoLong);
            //console.log(allStudents.geoLong);
            //console.log(vm.allStudents);
        });

        //console.log(vm.allStudents);
            vm.map = {center: {latitude: 51, longitude: 6}, zoom: 6};
            console.log(lang)

        vm.map = { center: { latitude: 51, longitude: 6 }, zoom: 6 };





    }


})();

