function Case()
{
    var nm = document.getElementById("nm").value;
    var mail = document.getElementById("mail").value;

    let nmm = nm.toUpperCase();
    nm.value = nmm;

    let email = mail.toLowerCase();
    mail.value = email;
}