'use strict';

app.controller('ProductCtrl',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('allProducts.json')
    	.success(function(data){
    		$scope.products = data.products;
    	});
    $scope.product = function(){
	    if ($scope.products !== null) {
	    	for (var i = $scope.products.length - 1; i >= 0; i--) {
		    	if ($scope.products[i].sdk === $routeParams.sdk) {
		    		return $scope.products[i];
		    	}
	    	}
	    }
	};
}]);
