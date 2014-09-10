/**
 * Created by rakeshsherwal on 9/9/2014.
 */
var exampleLine = "prices xom 91.43-91.44/vz50-50.01/s 7.23-7.24";

var regex = /w{1,3}/s?/d{1,2}/./d{0,2}/-/d{1,2}/.?/d{0,2} .test(exampleLine);
console.log(">>>>>>",regex);

