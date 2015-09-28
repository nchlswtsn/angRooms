'use strict';

  var roomApp = angular.module('roomApp', []);

  roomApp.controller('mainCtrl', function($scope) {
      var rooms = [];
      $scope.addRoom = function(newRoom){
        rooms.push(newRoom);
        console.log(rooms);
      }
      var items = [];
      $scope.addItem = function(itemName, itemQuantity, itemCost, roomSelected){
        var newData = [];
        newData.push(itemName, itemQuantity, itemCost, roomSelected);
        items.push(newData);
        console.log(items);
      }
  });
