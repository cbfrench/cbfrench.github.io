$(document).ready(function(){
    $(document).click(function(e){
        //alert($(e.target).is("#phone-menu-button, #phone-menu-button *"));
        if($(e.target).is("#phone-menu-button, #phone-menu-button *, #phone-menu, #phone-menu *")){
            var displayed = (document.getElementById("phone-menu").style.display != "none");
            if(displayed){
                $("#phone-menu").fadeOut(300);
            }
            else{
                $("#phone-menu").fadeIn(300);
            }
        }
        else{
            $("#phone-menu").fadeOut(300);
        }
    });
});
