'use strict';

angular.module('post').
		factory('Post',function($resource){

			var url='/json/posts.json'
			return $resource(url,{}, {

				query:{
					method:"GET",
					params:{},               //like slug,id which has to be passed to get url
					isArray:true,
					cache:true,
					// transformResponse-->alows to convert the http response
					// interceptor

				},
				get:{

					method:"GET",
					// params:{"id":@id},               //like slug,id which has to be passed to get url
					isArray:true,
					cache:true,

				}
			})


		});