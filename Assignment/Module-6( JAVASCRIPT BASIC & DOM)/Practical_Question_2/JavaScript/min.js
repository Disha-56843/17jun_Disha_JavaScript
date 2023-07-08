var val1 = parseInt(document.getElementById("num1").value);
var val2 = parseInt(document.getElementById("num2").value);
// var ans = document.getElementById("answer")

function add()
{
    let ans = val1 + val2;
    document.getElementById('answer').innerHTML = ans;
}
function sub()
{
    ans = val1 - val2;
    document.getElementById('answer').innerHTML = ans;

}
function multi()
{
    ans = val1 * val2;
    document.getElementById('answer').innerHTML = ans;

}
function div()
{
    ans = val1 / val2;
    document.getElementById('answer').innerHTML = ans;

}
function mod()
{
    ans = val1 % val2;
    document.getElementById('answer').innerHTML = ans;

}