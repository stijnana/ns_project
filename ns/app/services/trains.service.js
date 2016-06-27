(function() {
    'use strict';

    angular
        .module('services')
        .service("TrainService", TrainService);

    function TrainService($http) {
        var self = this;


        self.allTrains = [
            {name:"Anton", age:18},
            {name:"Joris", age:29},
            {name:"Cees", age:19},
            {name:"Ryan", age:18},
            {name:"Jesse", age:18},
            {name:"Idris", age:20},
            {name:"Donovan", age:18}
        ];


        $http.get('data/trainstations.json').then(function(stations){
            // we maken eerst de data leeg
            self.allTrains.length = 0;
            // en stoppen vervolgens de geladen data in de allStudents array
            // dit zorgt ervoor dat we nog steds met dezelfde array werken
            angular.extend(self.allTrains, stations.data);
        });



    }
})();