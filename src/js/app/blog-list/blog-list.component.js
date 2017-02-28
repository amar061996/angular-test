'use strict';

angular.module('blogList').
		component('blogList',{

			// template: "",
			templateUrl:'/templates/blog-list.html',
			controller: function($scope){
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