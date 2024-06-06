var load;
function mainFunction()
{

    load=setTimeout("display()",1500);
    

}

function display()
{
    document.getElementById("main1").style="display:block !important";
    document.getElementById("loader").style="display:none !important";
}


function lg()
{
    var nme = document.getElementById("number").value;
    var pas = document.getElementById("pass").value;
    

    if (nme == "9099969066" && pas == "9099969066") {
        alert("you are login in successfully");
        window.location="home.html";
    }
    else {
        alert("password is incoroct")
        window.location="index.html";
    }
}