'use strict';

app.controller('CartCtrl',['$scope', 'cart', '$http', function ($scope, cart, $http) {
    $scope.products = [];
    $http.get('allProducts.json')
      .success(function(data){
        $scope.products = data.products;
      });
    $scope.addCart = function(sdk, quant){
      cart[sdk] = quant;
    };

    //fix all

    $scope.cart= cart;
    $scope.getCart = function(){
      $scope.cartFin = [];
      if($scope.cart !== {}){
        for (var i in cart) {
          for (var j = $scope.products.length - 1; j >= 0; j--) {
            if(i === $scope.products[j].sdk){
              $scope.cartFin.push($scope.products[j]);
            }
          }
        }
      }
      return $scope.cartFin;
    };
    $scope.check = [];
    $scope.getTotal = function(){
      var total = 0;
      for (var i = $scope.cartFin.length - 1; i >= 0; i--) {
        total += $scope.cartFin[i].price * cart[$scope.cartFin[i].sdk];
      }
      return total;
    };

}]);
