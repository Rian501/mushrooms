'use strict';

const mushroomApp = angular.module('shroomApp', []);

mushroomApp.factory("MushroomFactory", function($q, $http) {
	function getShrooms() {
		return $q( (resolve, reject) => {
			$http.get('./mushrooms.json')
			.then( (shrooms) => {
				console.log("shrooms", shrooms.data.mushrooms);
				resolve(shrooms.data.mushrooms);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}
	return { getShrooms };
});

mushroomApp.controller("MushroomController", function($scope, MushroomFactory) {
	MushroomFactory.getShrooms()
	.then( (shroomsData) => {
		console.log("shroomsData", shroomsData);
		
		$scope.shroomsArray=[]

		angular.forEach(shroomsData, function(mushroom) {$scope.shroomsArray.push(mushroom);
		});
		console.log("shroomsarray", $scope.shroomsArray);
		$scope.shroomsGuide = $scope.shroomsArray;
	})
});