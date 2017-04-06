$(function(){
    $("#projectsButton").click(function(){
        $(".dropdown-content").toggle(500);
        $(".dropdown-content").style.display = "block";
    });
});
$(function(){
    $("#aboutButton").click(function(){
        $("body").fadeOut(500);
        setTimeout(goToAbout, 500);
        $(body).style.display = "none";
    });
});
$(function(){
    $("#homeButton").click(function(){
        $("body").fadeOut(500);
        setTimeout(goToHome, 500);
        $(body).style.display = "none";
    });
});
function goToAbout(){
    window.location.href = "aboutPage.html";
}
function goToHome(){
    window.location.href = "index.html";
}
