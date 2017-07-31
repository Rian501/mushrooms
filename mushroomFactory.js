'use strict';

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