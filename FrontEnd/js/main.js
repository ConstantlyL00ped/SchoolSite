const menuButtons = document.getElementsByClassName("menuButton");
const underlines = document.getElementsByClassName("underline");

for(let button = 0; button < menuButtons.length; button++){
    menuButtons[button].myParam = underlines[button].classList;
    menuButtons[button].addEventListener("mouseover", showUnderline)
    menuButtons[button].addEventListener("mouseleave", hiddeUnderline)
}

function showUnderline(evt){
    evt.currentTarget.myParam.add("shown")
}

function hiddeUnderline(evt){
    evt.currentTarget.myParam.remove("shown")
}

function changeMenu(evt){
    if(evt.currentTarget.secondParam == 0){
        window.location.href = "file:///E:/kod/stronaDoSzkoly/FrontEnd/stuffToLearn.html" //Change file path.
    }else{
        window.location.href = "file:///E:/kod/stronaDoSzkoly/FrontEnd/homeworks.html" //Also.
    }
}

if(window.location.href == "file:///E:/kod/stronaDoSzkoly/FrontEnd/main.html"){ //Too.
    for(let x = 0; x <= 1; x++){
        menuButtons[x].secondParam = x;
        menuButtons[x].addEventListener("click", changeMenu)
    }
}

