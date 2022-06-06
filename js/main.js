const mainMenuButtons = document.getElementsByClassName("menuButton");
const mainMenuButtonUnderline = document.getElementsByClassName("underline")

function showUnderline(evt){
    if(evt.currentTarget.myParam == 0){
        mainMenuButtonUnderline[0].classList.add("shown");
    }else{
        mainMenuButtonUnderline[1].classList.add("shown");
    }
}

function hiddeUnderline(evt){
    if(evt.currentTarget.myParam == 0){
        mainMenuButtonUnderline[0].classList.remove("shown");
    }else{
        mainMenuButtonUnderline[1].classList.remove("shown");
    }
}

function getID(id){
    showUnderline(id.classList[1] == "colorRichBlack");
}

for(let x = 0; x <= 1; x++){
    mainMenuButtons[x].myParam = x;
    mainMenuButtons[x].addEventListener("mouseover", showUnderline)
    mainMenuButtons[x].addEventListener("mouseleave", hiddeUnderline)
}
