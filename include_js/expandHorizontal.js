document.getElementById('expandHorizontal').onclick = function() {
    var element = document.getElementById("expandNavHorizontal");
    style = window.getComputedStyle(element),
    display = style.getPropertyValue('display');
    var button = document.getElementById("expandHorizontal");
    var buttonContainer = document.getElementById("buttonContainer");
    if (display == "block") {
        element.setAttribute("style","display:none!important;");
        button.setAttribute("class","triangleRight")
    }
    else {
        element.setAttribute("style","display:block!important; width: 100%; z-index: 1000;");
        buttonContainer.setAttribute("style","background-color: rgba(0,0,0,.3);");
        button.setAttribute("class","triangleDown");
    }
}