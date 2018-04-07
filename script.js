function mobileMenu(){
    var button = document.getElementsByClassName("mobile-menu")[0];
    var menuButtons = document.getElementsByClassName("menu-button");
    var i;

    if(menuButtons[0].style.display == "inline-block"){
        for(i = 0; i < menuButtons.length; i++){
            menuButtons[i].style.display = "none";
        }
    }
    else{
        for(i = 0; i < menuButtons.length; i++){
            menuButtons[i].style.display = "inline-block";
        }
    }
}
