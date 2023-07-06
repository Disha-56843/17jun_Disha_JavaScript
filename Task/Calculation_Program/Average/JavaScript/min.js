function result()
{
var sub1 = parseInt(document.getElementById("sub1").value);
var sub2 = parseInt(document.getElementById("sub2").value);
var sub3 = parseInt(document.getElementById("sub3").value);
var sub4 = parseInt(document.getElementById("sub4").value);
var sub5 = parseInt(document.getElementById("sub5").value);
var avg = document.getElementById("avg");


    avg.innerHTML = (sub1 + sub2 + sub3 + sub4 + sub5)/5;
}
