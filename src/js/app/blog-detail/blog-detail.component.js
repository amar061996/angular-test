'use strict';

angular.module('blogDetail').
	component('blogDetail',{

		templateUrl: '/templates/blog-detail.html',

		controller: function($routeParams, $scope){

			var blogItems=[
						{title:"Some Title 1",id:1,description:"some description"},
						{title:"Some Title 2",id:2,description:"some description"},
						{title:"Some Title 3",id:3,description:"some description"},
						{title:"Some Title 4",id:4,description:"some description"}

					]
			$scope.title="Blog " + $routeParams.id	
		}

	});