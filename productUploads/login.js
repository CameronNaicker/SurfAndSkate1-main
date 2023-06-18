function validate(){

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

if(username = null && username != "Admin"){
window.alert("Please enter Username");
}
if (password = null && password != "surf") {

    window.alert("Please enter password");
    
    return false;
}

    if(username=="Admin" && password=="surf"){
 
alert("Login Successful");

    }else{

        window.alert("Username or Password Incorrect");
        return false;
    }
}