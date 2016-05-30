(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController() {

        var vm = this;

        vm.newStudent = {};

        vm.setStudent = function(currentStudent){
            if(vm.currentStudent != currentStudent)
                vm.currentStudent = currentStudent;
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
        }

        vm.allStudents = [
            {name:"Anton", age:18},
            {name:"Joris", age:29},
            {name:"Cees", age:19},
            {name:"Ryan", age:18},
            {name:"Jesse", age:18},
            {name:"Idris", age:20},
            {name:"Donovan", age:18}
        ];


    }


})();