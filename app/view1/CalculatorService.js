'use strict';

angular
    .module('myApp')
    .factory('CalculatorService', CalculatorService);

function CalculatorService() {
    var service = {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        pow: pow
    };

    return service;

    function add(a,b) {
        return a+b;
    }

    function subtract(a,b) {
        return a-b;
    }

    function multiply(a,b) {
        return a*b;
    }

    function divide(a,b) {
        return a/b;
    }

    function pow(a,b) {
        return a**b;
    }
}