function showContents(clickedelement) {
    var matchID = clickedelement.getAttribute("name");
    var sameMatch = document.getElementsByName(matchID);
    var show = sameMatch[1];
    style = window.getComputedStyle(show),
    display = style.getPropertyValue('display');
    if (display == "block") {
        show.setAttribute("style","display:none;");
    }
    else {
        show.setAttribute("style","display:block");
    }
}