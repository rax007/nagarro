/**
 * Created by rakeshsherwal on 9/8/2014.
 */

//callback function
var sum = function (a) {
    return a +1;
};

var mutiplyByTwo = function (a, b, c, callback) {
    var ar = [],
        i;
    for(i = 0; i<3; i++)
    ar[i] = callback(arguments[i] * 2);
    return ar;
};

var mySum = mutiplyByTwo(1,2,3,sum);
console.log(mySum);