import React from "react";

function add()
{
    var a = parseInt(prompt("Enter value of a:"));
    var b = parseInt(prompt("Enter value of b:"));
    var c = a + b ;
    window.alert("Addition of a and b is:" +c);
}
function sub()
{
    var a = parseInt(prompt("Enter value of a:"));
    var b = parseInt(prompt("Enter value of b:"));
    var c = a - b ;
    window.alert("Substraction of a and b is:" +c);
}
function multi()
{
    var a = parseInt(prompt("Enter value of a:"));
    var b = parseInt(prompt("Enter value of b:"));
    var c = a * b ;
    window.alert("Mutiplication of a and b is:" +c);
}
function dv()
{
    var a = parseInt(prompt("Enter value of a:"));
    var b = parseInt(prompt("Enter value of b:"));
    var c = a / b ;
    window.alert("Division of a and b is:" +c);
}
export {add,sub,multi,dv};