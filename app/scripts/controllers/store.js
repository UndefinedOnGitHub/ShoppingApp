'use strict';

/**
 * @ngdoc function
 * @name shoppingAppApp.controller:storeCtrl
 * @description
 * # storeCtrl
 * Controller of the shoppingAppApp
 */

app.controller('StoreCtrl', function ($scope,$http,cart) {
    $http.get('allProducts.json')
    	.success(function(data){
    		$scope.products = data.products;
    	});
    $scope.addCart = function(sdk, quant){
    	cart[sdk] = quant;
    };
    $scope.cart = cart;
});
