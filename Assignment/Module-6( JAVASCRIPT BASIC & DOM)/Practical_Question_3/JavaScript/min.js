var total = document.getElementById("total");
var sub1 = parseInt(document.getElementById("sub1").value);
var sub2 = parseInt(document.getElementById("sub2").value);
var sub3 = parseInt(document.getElementById("sub3").value);
var sub4 = parseInt(document.getElementById("sub4").value);
var sub5 = parseInt(document.getElementById("sub5").value);
var sub6 = parseInt(document.getElementById("sub6").value);
var sub7 = parseInt(document.getElementById("sub7").value);
var persent = document.getElementById("percentage");

function result()
{
    total.innerHTML = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
    persent.innerHTML = total.innerHTML/7;
}
