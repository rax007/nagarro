/**
 * Created by rakeshsherwal on 9/9/2014.
 */

var Hero = function (name) {
    this.name = name;
    this.occupation = "ninja";
    this.whoIam = function () {
        return "I'm " + this.name +" " + this.occupation;
    }
};

var h1 = new Hero("rakesh");

//h1
console.log("========================================================================");
console.log("h1.name:----",h1.name);
console.log("h1.constructor:----",h1.constructor);
console.log("typeof h1:----",typeof h1);
console.log("h1.whoIam:----",h1.whoIam());

//h2 :-
var h2 = new h1.constructor("naresh"); //creating object using there object constructor property.

console.log("========================================================================");
console.log("h2.name:----",h2.name);
console.log("h2.constructor:----",h2.constructor);
console.log("typeof h2:----",typeof h2);
console.log("h1.whoIam h2:----",h2.whoIam());

//construction functions and return object, diff from this
console.log("========================================================================");
var  Class = function () {
    this.a = "a";
    return {
        b :"b"
};
//    return b ="b";
};

var  obj = new Class();

console.log("obj.a:------", obj.a);
console.log("obj.b:------", obj.b);