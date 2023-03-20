function val() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var a1 = document.getElementById("add");
    var a2 = document.getElementById("secAdd");
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q1v = q1.value;
    var q2v = q2.value;
    var q3v = q3.value;
    if (!isNaN(fname)||!isNaN(lname)||!isNaN(city)||!isNaN(state)) {
        alert("enter text only");
        return false;
    } else if (a1.value.length<1){
        a1.style.backgroundColor="pink";
        return false;
    } else if (a2.value.length<1){
        a2.style.backgroundColor="pink";
        return false;
    } else if (isNaN(zip)){
        alert("only number is allowed for zip code")
        return false;
    } else if (q1v.length<1){
        q1.style.backgroundColor="yellow";
        return false;
    } else if (q2v.length<1){
        q2.style.backgroundColor="yellow";
        return false;
    } else if (q3v.length<1){
        q3.style.backgroundColor="yellow";
        return false;
    } else if (!isNaN(q1v)||!isNaN(q2v)||!isNaN(q3v)) {
        alert("enter text only");
        return false;
    }
        
}
