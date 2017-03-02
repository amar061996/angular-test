'use strict';

angular.module('blogList').
		component('blogList',{

			// template: "",
			templateUrl:'/templates/blog-list.html',
			controller: function($routeParams, $scope){

					console.log($routeParams)
					var blogItems=[
						{title:"Some Title 1",id:1,description:"some description"},
						{title:"Some Title 2",id:2,description:"some description"},
						{title:"Some Title 3",id:3,description:"some description"},
						{title:"Some Title 4",id:4,description:"some description"}

					]
					$scope.items=blogItems
					$scope.title='Hi there'
					$scope.clicks=0
					$scope.doSomething=function(){

					console.log("clicked");
					$scope.clicks+=1;
					$scope.title='New title ' + $scope.clicks +' times';

			}

			}
		});

		// controller('BlogListController',function($scope){

		// 	console.log("hello");
		// 	$scope.title='Hi there';
		// 	$scope.clicks=0
		// 	$scope.doSomething=function(){

		// 		console.log("clicked");
		// 		$scope.clicks+=1;
		// 		$scope.title='New title ' + $scope.clicks +' times';

		// 	}
		// });