'use strict';

var myApp = angular.module('myApp',[])

                   .controller("myCtrl",function($scope) {
						 

						  $scope.users = [                //our 'Employee List'
						  	{
						    	'name': 'jim',
						      'desc': 'my name is jim'
						    },
						    {
						    	'name': 'tom',
						      'desc': 'my name is tom'
						    },
						    {
						    	'name': 'Owen',
						      'desc': 'my name is Owen'
						    }
						  ];
						  //when you click the name
						  $scope.onClickName = function(user){
						  // initial content status as hide
						  	user.show = !user.show;
						    if(user.show){
						    	$scope.users.forEach(function(v){
						      	if(v.name !== user.name){
						        	v.show = false;
						        }
						      });
						    }
						  }
						  //when you click the content
						  $scope.onClickDesc = function(user){
						  	// an alert event provoked when click the bio content
						  	alert(user.desc);
						  } 
						});