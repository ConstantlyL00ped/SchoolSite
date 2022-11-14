
function setButtonsEventListeners(){
    const menuButtons = document.getElementsByClassName("menuButton");
    const underlines = document.getElementsByClassName("underline");
    const loginButton = document.getElementsByClassName("loginButton");

    const visible = 1 
    const hidden = -1

    for(let button = 0; button < menuButtons.length; button++){
        menuButtons[button].myParam = underlines[button].classList;
        menuButtons[button].addEventListener("mouseover", showUnderline)
        menuButtons[button].addEventListener("mouseleave", hideUnderline)
        menuButtons[button].addEventListener("click", () => {changeLoginFormVisibility(hidden)
                                                             changeMenuVisibility(visible); 
                                                             setTimeout(downloadButtonRelatedContent, 500);
                                                            })
    }
    loginButton[0].addEventListener("click", () => {
        const closeLoginFormButton = document.getElementById("closeLoginForm");
        console.log(" ", closeLoginFormButton)

        closeLoginFormButton.addEventListener("click", (hidden) => { 
                                                                    changeLoginFormVisibility(hidden);
                                                                    changeMenuVisibility(visible)
                                                                   })
        
        changeLoginFormVisibility(visible)
        changeMenuVisibility(hidden);
    })
}

function requestDataForSpecifedButton(buttonID){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "127.0.0.1:3333/Hello");

    xhr.send()
}

function changeLoginFormVisibility(hideOrShow){
    const loginForm = document.getElementsByClassName("loginFormContainer");
    const formInputArea = document.getElementsByClassName("inputArea")

    if(hideOrShow == 1){
        loginForm[0].classList.add("shown");
        loginForm[0].classList.remove("noUserSelect");
        return
    }

    loginForm[0].classList.remove("shown");
    loginForm[0].classList.add("noUserSelect");
}

function changeMenuVisibility(hideOrShow){
    const menuButtons = document.getElementsByClassName("subjectsMenu");
 
    if(hideOrShow == -1){
        menuButtons[0].style.opacity = 0.3;
        return
    }

    menuButtons[0].style.opacity = 1
}

function downloadButtonRelatedContent(){
    console.log(123);
}

function showUnderline(evt) {evt.currentTarget.myParam.add("shown")}

function hideUnderline(evt) {evt.currentTarget.myParam.remove("shown")}


function shouldIShowButton(){
    const scrollDownButton = document.querySelector(".movePageDownButton")

    if(window.scrollY > 0)
    {
        scrollDownButton.classList.add("show");
    }else{
        scrollDownButton.classList.remove("show");
    }
}

setButtonsEventListeners();
window.addEventListener("scroll", shouldIShowButton)

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
    if(xhr.status == 200){
        console.log("Connection result: ");
        console.log(xhr.response);
    }
})

xhr.addEventListener("error", () => {
    console.log("Unfortunately we couldn't make the connection.")
})

xhr.open("GET", "/Hello", true);

xhr.send()
