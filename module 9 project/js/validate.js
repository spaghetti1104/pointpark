function validate() {
    var x = document.forms["myForm"]["username"].value
    var y = document.forms["myForm"]["password"].value
    if (x === "" || y === ""){
        alert("Please fill in the form");
        return false;
    } else if (x.length < 8){
        alert("Username must be more than 8 characters");
        return false;
    } else if (y.length < 12){
        alert("Password must be more than 12 characters");
        return false;
    } else{
        alert("You are logged in");
        return true;
    }

}