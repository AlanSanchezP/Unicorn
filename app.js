'use strict';
/**
* @ngdoc overview
* @name UnicornApp
* @description
* # UnicornApp
*
* Main module of the application.
*/
 
var app = angular.module('UnicornApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: '',
			title: 'Icons'
		})
		.when('/how', {
			templateUrl: 'views/how_to.html',
			controller: '',
			title: 'How to use'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: '',
			title: 'About'
		})
		.when('/error', {
	    templateUrl: 'views/404.html',
	    title: 'Error 404'
		})
		.otherwise({
	    redirectTo: '/error'
	  });
}]);

app.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.title = current.$$route.title;
		window.scrollTo(0,0);
	});
}]);

