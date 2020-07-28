(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
    var List1=this
    List1.itemsList=ShoppingListCheckOffService.getItems();
    List1.bought=function(itemIndex){
        ShoppingListCheckOffService.bought(itemIndex)
    }
}
AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
    var List2=this
    List2.itemsList1=ShoppingListCheckOffService.getItem()
}
function ShoppingListCheckOffService(){
    var service=this
    var items=[
        {
            name:'Cookies',
            quantity:10
        },
        {
            name:'Lays',
            quantity:5
        },
        {
            name:'Pen',
            quantity:3
        },
        {
            name:'Pencil',
            quantity:4
        },
        {
            name:'Kurkure',
            quantity:1
        },
        {
            name:'Dairy milk',
            quantity:3
        },
        {
            name:'Bingo',
            quantity:5
        }
    ]
    var item1=[]
    service.bought=function(itemIndex){
        item1.push(items[itemIndex])
        items.splice(itemIndex,1)
    }
    service.getItems=function(){
        return items
    }
   service.getItem=function(){
       return item1
   }
}
})();