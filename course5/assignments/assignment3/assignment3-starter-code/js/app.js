//(function() {
//  'use strict!';
//  angular.module('NarrowItDownApp', [])
//      .controller('NarrowItDownController', ['MenuSearchService', NarrowItDownController])
//      .service('MenuSearchService', ['$http', MenuSearchService])
//      .directive('foundItems', FoundItems);
//
//  function FoundItems() {
//      var ddo = {
//        templateUrl: 'foundList.html',
//        restrict: 'A',
//        scope: {
//            foundItems: '<',
//            onRemove: '=',
//            pressed: '<'
//        },
//        controller: FoundItemsDirectiveController,
//        controllerAs: 'narrow',
//        bindToController: true
//      };
//
//      return ddo;
//  };
//
//  function FoundItemsDirectiveController() {
//    var narrow = this;
//    narrow.nothingFound = function() {
//        if (narrow.foundItems.length == 0 && narrow.pressed)
//            return true;
//        return false;
//    }
//  };
//
//  MenuSearchService.$inject = ['$http'];
//  function MenuSearchService($http) {
//    var search = this;
//
//    search.found = [];
//    search.getMatchedMenuItems = function(searchTerm) {
//        var response = $http({
//            method: "GET",
//            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
//        }).then(function(response){
//
//            var foundItems = response.data['menu_items'];
//
//            search.found.length = 0;
//            for(var i = 0; i < foundItems.length; i++) {
//                var desc = foundItems[i]['description'].toLowerCase();
//                if (desc.includes(searchTerm))
//                    search.found.push(foundItems[i]);
//            }
//
//        });
//        return response;
//    };
//  };
//
//  NarrowItDownController.$inject = ['MenuSearchService'];
//  function NarrowItDownController(MenuSearchService) {
//      var narrow = this;
//
//      narrow.found = MenuSearchService.found;
//      narrow.search_term = "";
//      narrow.pressed = false;
//
//      narrow.searchButtonPressed = function() {
//
//        narrow.pressed = true;
//        if(narrow.search_term.trim().length == 0) {
//            narrow.found.length = 0;
//        } else {
//            MenuSearchService.getMatchedMenuItems(narrow.search_term);
//        }
//      }
//
//      narrow.onRemove = function(index) {
//        narrow.found.splice(index, 1);
//      }
//
//      
//  
//  };
//      
//})();

!function(){"use strict!";function e(){var e={templateUrl:"foundList.html",restrict:"A",scope:{foundItems:"<",onRemove:"=",pressed:"<"},controller:n,controllerAs:"narrow",bindToController:!0};return e}function n(){var e=this;e.nothingFound=function(){return 0==e.foundItems.length&&e.pressed?!0:!1}}function t(e){var n=this;n.found=[],n.getMatchedMenuItems=function(t){var r=e({method:"GET",url:"https://davids-restaurant.herokuapp.com/menu_items.json"}).then(function(e){var r=e.data.menu_items;n.found.length=0;for(var o=0;o<r.length;o++){var s=r[o].description.toLowerCase();s.includes(t)&&n.found.push(r[o])}});return r}}function r(e,n){var t=this;t.found=n.found,t.search_term="",t.pressed=!1,t.searchButtonPressed=function(){t.pressed=!0,0==t.search_term.trim().length?t.found.length=0:n.getMatchedMenuItems(t.search_term)},t.onRemove=function(e){t.found.splice(e,1)}}angular.module("NarrowItDownApp",[]).controller("NarrowItDownController",r).service("MenuSearchService",t).directive("foundItems",e),t.$inject=["$http"],r.$inject=["$scope","MenuSearchService"]}();
