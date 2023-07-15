function log()
{
    var sel = document.getElementById("pro").value;

    if(sel == "Manager")
    {
        window.location="manager.html";
    }
    else if (sel =="Faculty")
    {
        window.location="faculty.html";
    }
    else if (sel == "Developer")
    {
        window.location="developer.html";
    }
    else
    {
        alert("Something went wrong plese try again later");
    }
}