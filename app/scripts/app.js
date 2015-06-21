'use strict';

/**
 * @ngdoc overview
 * @name shoppingAppApp
 * @description
 * # shoppingAppApp
 *
 * Main module of the application.
 */
var app = angular.module('shoppingAppApp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/store/', {
		controller: 'StoreCtrl',
		templateUrl: 'views/store.html'
	}).when('/',{
		controller: 'MainCtrl',
		templateUrl: 'views/main.html'
	}).when('/products/:sdk', {
		controller: 'ProductCtrl',
		templateUrl: 'views/product.html'
	}).when('/cart/', {
		controller: 'CartCtrl',
		templateUrl: 'views/cart.html'
	}).otherwise({
		redirectTo: '/'
	});
}]);
app.value('cart', {});