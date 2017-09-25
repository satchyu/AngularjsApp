describe('peacock test', function(){

	beforeEach(module('peacock'));  

	var $route;  

	beforeEach(inject(function(_$route_){

		$route = _$route_;
	}));

	it('restaurent', function(){   
	 expect($route.current.templateUrl).toEqual('website/index.html');
		
		
	});
});