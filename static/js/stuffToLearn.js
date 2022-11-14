const scrollDownButton = document.querySelector(".movePageDownButton")

function shouldIShowButton(){
    if(window.scrollY > 0)
    {
        scrollDownButton.classList.add("show");
    }else{
        scrollDownButton.classList.remove("show");
    }
}

window.addEventListener("scroll", shouldIShowButton)