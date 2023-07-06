function comp()
{
    var p = document.getElementById("p").value;
    var i = document.getElementById("i").value;
    var year = document.getElementById("n").value;
    var interestt = document.getElementById("interest");
    var totall = document.getElementById("total");
    // debbuger;
    
    var ans = (p * (1 + i / 100) ** year);

    interestt.value = ans - p;
    totall.value = ans ; 
}