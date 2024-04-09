function validator()
{
    usernm = "prabh";
    passwd="123";

    vuser = document.getElementById("usern").value ;
    puser = document.getElementById("passw").value ;
    if(usernm==vuser && puser==passwd)
    {
        alert("user is valid")
    }
    else(
        alert("user is invalid")
    )
}