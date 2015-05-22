
	'use strict';
	var app = angular.module('swiftApp', ['ui.bootstrap']);
	app.directive('swiftFeatures', function() {
		return {
			restrict : 'AE',
			templateUrl : 'swift.html',
			controller : function($scope, $http) {
				this.image = "images/swift.jpg";
				$http.get('js/swift.json').success(function(data) {
					$scope.swiftdata = data;
					console.log("data=" + JSON.stringify($scope.swiftdata[0].title));
				}).error(function(myData) {
					console.log("Problems=" + myData);
				});
			},
			controllerAs : "ctrl"
		};
	})
