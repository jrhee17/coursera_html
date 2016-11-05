//(function() {
//
//'use strict';
//
//angular.module('ShoppingListCheckOff', [])
//.controller('ToBuyController', ['ShoppingListCheckOffService', ToBuyController])
//.controller('AlreadyBoughtController', ['ShoppingListCheckOffService', AlreadyBoughtController])
//.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
//
//ToBuyController.$inject = ['ShoppingListCheckOffService'];
//function ToBuyController(ShoppingListCheckOffService) {
//    var showList = this;
//    showList.items = ShoppingListCheckOffService.to_buy_items;
//    console.log('ToBuyController' + showList.items);
//
//    showList.buy = function(index) {
//        console.log('Buy button pressed' + index);
//        ShoppingListCheckOffService.buy(index);
//    }
//}
//
//AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//function AlreadyBoughtController(ShoppingListCheckOffService) {
//    var showList = this;
//    showList.items = ShoppingListCheckOffService.already_bought_items;
//}
//
//function ShoppingListCheckOffService() {
//    var service = this;
//    var to_buy_items = [];
//    var already_bought_items = [];
//
//    // Seed preliminary data
//    for(var i = 0; i < 10; i++){
//        to_buy_items.push({
//            itemName: 'item' + i,
//            quantity: i
//        });
//    }
//    console.log(to_buy_items);
//
//    service.to_buy_items = to_buy_items;
//    service.already_bought_items = already_bought_items;
//
//    service.buy = function(index) {
//        var val = to_buy_items.splice(index, 1);
//        already_bought_items.push(val[0]);
//        console.log(val);
//    };
//}
//
//})();
!function(){"use strict";function e(e){var o=this;o.items=e.to_buy_items,console.log("ToBuyController"+o.items),o.buy=function(o){console.log("Buy button pressed"+o),e.buy(o)}}function o(e){var o=this;o.items=e.already_bought_items}function t(){for(var e=this,o=[],t=[],i=0;10>i;i++)o.push({itemName:"item"+i,quantity:i});console.log(o),e.to_buy_items=o,e.already_bought_items=t,e.buy=function(e){var i=o.splice(e,1);t.push(i[0]),console.log(i)}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",["ShoppingListCheckOffService",e]).controller("AlreadyBoughtController",["ShoppingListCheckOffService",o]).service("ShoppingListCheckOffService",t),e.$inject=["ShoppingListCheckOffService"],o.$inject=["ShoppingListCheckOffService"]}();
