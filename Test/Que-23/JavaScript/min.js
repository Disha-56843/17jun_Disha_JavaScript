function clr() {
    document.getElementById("display").value = "";
}
function val(val) {
    document.getElementById("display").value += val;
}
function cal() {
    var res = document.getElementById("display").value;
    var cal = eval(res);
    document.getElementById("display").value = cal;
}
function del() {
    var res = document.getElementById("display").value;
    var cal = res.slice(0, -1);
    document.getElementById("display").value = cal;
}
function oneby() {
    var res = document.getElementById("display").value;
    var cal = 1 / res
    document.getElementById("display").value = cal;
}
function sqr() {
    var res = document.getElementById("display").value;
    var cal = res ** 2;
    document.getElementById("display").value = cal;
}
function sqroot() {
    var res = document.getElementById("display").value;
    var cal = Math.sqrt(res);
    document.getElementById("display").value = cal;
}
function negativepositive() {
    var res = document.getElementById("display").value;
    var cal = -res;
    document.getElementById("display").value = cal;
}