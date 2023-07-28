$(document).ready(function(){

$("#account-list").hide();
$("#language-list").hide();
$("#all-list").hide();
$("#cross").hide();


// Account and list 

$("#account").click(function(){

    $("#account-list").toggle();
});


// Select language

$("#flag-language").click(function(){

    $("#language-list").toggle();
});

// All list 
$("#all").click(function(){

    $("#all-list").show();
    $("#cross").show();
    $("#mainpage").css({
        "filter"         : "brightness(50%)",
        "-webkit-filter" : "brightness(50%)",
        "-moz-filter"    : "brightness(50%)",
        "-o-filter"      : "brightness(50%)"
        })

});
$("#cross").click(function(){

    $("#all-list").hide();
    $("#cross").hide();
    $("#mainpage").css({
        "filter"         : "brightness(100%)",
        "-webkit-filter" : "brightness(100%)",
        "-moz-filter"    : "brightness(100%)",
        "-o-filter"      : "brightness(100%)"
        })

});

});