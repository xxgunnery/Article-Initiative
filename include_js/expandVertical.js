document.getElementById('expandVertical').onclick = function() {
    var element = document.getElementById("educationcontentDetailsList");
    style = window.getComputedStyle(element),
    display = style.getPropertyValue('display');
    var button = document.getElementById("triangle");
    if (display == "block") {
        element.setAttribute("style","display:none;");
        button.setAttribute("class","triangleRight")
    }
    else {
        element.setAttribute("style","display:block");
        button.setAttribute("class","triangleDown");
    }
}