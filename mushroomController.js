'use strict';


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