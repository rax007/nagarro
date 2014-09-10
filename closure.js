//closure #1:-simple Example
var simpleClosureExample = function () {
    var textMessage = "inside simpleClosureExample";

    return function () {
        return textMessage;
    };
}

var testSimpleClosureExample = simpleClosureExample();
console.log("Result closure #1:----\n",testSimpleClosureExample() + "\n");

//closure #2:-simple
var n ;
var f = function () {
    var b ="b";
    n = function () {
        return b;
    };
}
console.log("Result closure #2:----\n",f() + "\n");
console.log(n() + "\n");

//closure #3:-simple

//example 1 -NOT CLOSURE
//var  incrementArguments = function (args) {
//    var returnedFunction = function () {
//        return args;
//        };
//    args++;
//    return returnedFunction;
//};

var  incrementArguments = function (args) {
    var returnedFunction = function (x) {
        return (function () {
            return x;
        });
    }(args);
    args++;
    return returnedFunction;
};
var returnedFunction = incrementArguments(123);
//var s = returnedFunction();
console.log("Result closure #3: example 1----\n",incrementArguments() + "\n");
console.log(returnedFunction() + "\n");
//console.log("Result closure #3:----\n",s() + "\n");

//example 2 - NOT CLOSURE

//var loop = function () {
//    var a = [];
//    for (var i =0; i<3; i++)
//    a[i] = (function () {
//        return i;
//    });
//    return a;
//};

//example 2 - closure
//var loop = function () {
//    var a = [];
//    for (var i =0; i<3; i++)
//    a[i] = (function (x) {
//        return ( function () {
//            return x;
//        });
//    }(i));
//    return a;
//};
//example 2 - closure with stantdard
var loop = function () {
    var a = [];
    var makeClosure = function (x) {

        return (
            function(){
                return x;
            }
            );
    };
    for (var i =0; i<3; i++)
        a[i] = makeClosure(i);
    return a;
};
var a = loop();
console.log("Result closure #3: example 2----\n",loop() + "\n");
console.log(a[0]());
console.log(a[1]());
console.log(a[2]());





