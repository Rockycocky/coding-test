function myCtrl($scope) {
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
			  
			  $scope.onClickName = function(user){
			  	user.show = !user.show;
			    if(user.show){
			    	$scope.users.forEach(function(v){
			      	if(v.name !== user.name){
			        	v.show = false;
			        }
			      });
			    }
			  }
			  
			  $scope.onClickDesc = function(user){
			  	alert(user.desc);
			  } 
			}