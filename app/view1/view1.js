(function () {
    'use strict';

    angular.module('myApp.view1', ['ngRoute'])

        .controller('View1Ctrl', View1Ctrl)

        .directive("entering", function(){
            return function(scope, element) {
                element.bind("mouseover", function(){
                    alert("Mouse has entered the div");
                })
            }
        });

    View1Ctrl.$inject=['CalculatorService', '$scope'];


    /* @ngInject */
    function View1Ctrl(CalculatorService, $scope) {

        var vm = this;
        vm.value1;
        vm.value2;
        vm.sign = '+';
        vm.clickCount = 0;
        vm.result = null;
        vm.myArray = [];
        vm.limit = 5;
        vm.reverse = true;

        vm.doCalculations = doCalculations;
        vm.inc = inc;
        vm.limitInc = limitInc;
        vm.reverseList = reverseList;

        $scope.$watchGroup(['vm.value1','vm.value2','vm.sign'],function () {
            vm.doCalculations()
        });

        function doCalculations() {
            if(isNaN(vm.value1) || isNaN(vm.value2)){
                return;
            }
            switch (vm.sign) {
                case '+': vm.result = CalculatorService.add(vm.value1, vm.value2); break;
                case '-': vm.result = CalculatorService.subtract(vm.value1, vm.value2); break;
                case '*': vm.result = CalculatorService.multiply(vm.value1, vm.value2); break;
                case '/': vm.result = CalculatorService.divide(vm.value1, vm.value2); break;
                case '^': vm.result = CalculatorService.pow(vm.value1, vm.value2); break;
            }
        }

        function inc() {
            vm.clickCount++;
            vm.myArray.push(Math.floor(Math.random() * 100));
        }

        function limitInc() {
            vm.limit += 5;
        }

        function reverseList() {
            vm.reverse = !vm.reverse;
        }


    }

})();