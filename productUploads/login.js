function validate(){

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

if(username = null && username.value != "Admin"){
window.alert("Please enter Username");
}
if (password.value = null && password != "surf") {

    window.alert("Please enter password");
    
    return false;
} else if(username=="Admin" && password=="surf"){
 
alert("Login Successful");

    }else{

        window.alert("Username or Password Incorrect");
        return false;
        
    }
}