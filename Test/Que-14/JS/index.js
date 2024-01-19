var val1 = parseInt(document.getElementById("nm1").value);
var val2 = parseInt(document.getElementById("nm2").value);

function multipy()
{
    ans = val1 * val2;
    document.getElementById('result').innerHTML = ans;

}
function divide()
{
    ans = val1 / val2;
    document.getElementById('result').innerHTML = ans;

}