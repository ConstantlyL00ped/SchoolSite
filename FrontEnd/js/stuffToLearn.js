const subjectButton = document.getElementsByClassName("menuButton");
const underlines = document.getElementsByClassName("underline");

for(let button = 0; button < subjectButton.length; button++){
    subjectButton[button].myParam = underlines[button].classList;
    subjectButton[button].addEventListener("mouseover", showUnderline)
    subjectButton[button].addEventListener("mouseleave", hiddeUnderline)
}

function showUnderline(evt){
    evt.currentTarget.myParam.add("shown")
}

function hiddeUnderline(evt){
    evt.currentTarget.myParam.remove("shown")
}