var app = angular.module('someApp', []);

app.component('priceList', {
  template: `
    <form ng-submit="vm.addItem()">
      <p>Title: <input type="text" ng-model="vm.newItem.title"></p>
      <p>Description: <input type="text" ng-model="vm.newItem.description"></p>
      <p>Price: <input type="text" ng-model="vm.newItem.price"></p>
      <button type="submit">Submit</button>
    </form>
    <h3>Items List</h3>
    <ul>
      <li ng-repeat="item in vm.items track by $index">
        <p>Title: {{item.title}}</p>
        <p>Description: {{item.description}}</p>
        <p>Price: {{item.price | currency: $}}</p>
        <button ng-click="vm.removeItem($index)">Delete</button>
      </li>
    </ul>
  `,
  controller: function() {

    var vm = this;

    vm.items = [];

    vm.addItem = function() {
      vm.items.push(vm.newItem);
      vm.newItem = null;
    };
    vm.removeItem = function(index) {
      vm.items.splice(index, 1)
    };
  },
  controllerAs: 'vm'
})
