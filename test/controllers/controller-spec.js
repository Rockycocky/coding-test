 
 describe('myCtrl',fucntion() {
	
	var $scope;

	beforeEach(module('myApp'));

	beforeEach(inject(function($rootscope,$controller){
		$scope=$rootscope.$new();
		$controller(myCtrl,{$scope:$scope});
	}));
	it("to test if the user name is null",function(){
		expect($scope.user.name).not.toBeNull();
	});
});