function enlargeText() {
    document.getElementById("pgh1").style.fontSize= "3em";
    document.getElementById("pgh2").style.fontSize= "3em";
    document.getElementById("pgh3").style.fontSize= "3em";
    document.getElementById("pgh4").style.fontSize= "3em";
    document.getElementById("pgh5").style.fontSize= "3em";
}
function decreaseText(){
    document.getElementById("pgh1").style.fontSize= ".5em";
    document.getElementById("pgh2").style.fontSize= ".5em";
    document.getElementById("pgh3").style.fontSize= ".5em";
    document.getElementById("pgh4").style.fontSize= ".5em";
    document.getElementById("pgh5").style.fontSize= ".5em";
}
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    element.classList.toggle('hidden');
}