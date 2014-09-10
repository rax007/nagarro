/**
 * Created by rakeshsherwal on 9/8/2014.
 */
var a = 10;
function f() {
    alert(a);
    var a = "local";
    alert(a);
}
f();