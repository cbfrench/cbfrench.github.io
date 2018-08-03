var term = "all systems";

$(document).ready(function(){
    sortReviews();
    sortSystem();
    $("#review-sort").change(function(){
        $(".review-link").fadeTo(200, 0).delay(200);
        setTimeout(sortReviews, 300);
        $(".review-link").fadeTo(200, 1);
    });
    $("#review-system").change(function(){
        $(".review-link").fadeTo(200, 0).delay(200);
        setTimeout(sortSystem, 300);
        $(".review-link").fadeTo(200, 1);
    });

function sortReviews(){
    var reviews = document.getElementsByClassName("review-link");
    var names = [];
    var s = document.getElementById("review-sort");
    var v = s.options[s.selectedIndex].text;
    v = v.toLowerCase();
    if(v == "date added"){
        for(var i = 0; i < reviews.length; i++){
            reviews[i].style.order = reviews[i].children[0].getAttribute("date") * -1;
        }
    }
    if(v == "name"){
        for(var i = 0; i < reviews.length; i++){
            names[i] = reviews[i].children[0].children[0].children[0].getAttribute("alt");
        }
        names.sort();
        for(var i = 0; i < reviews.length; i++){
            for(var j = 0; j < reviews.length; j++){
                if(reviews[i].children[0].children[0].children[0].getAttribute("alt") == names[j]){
                    reviews[i].style.order = j;
                }
            }
        }
    }
    if(v == "highest score"){
        for(var i = 0; i < reviews.length; i++){
            reviews[i].style.order = reviews[i].children[0].getAttribute("score") * -1;
        }
    }
    if(v == "lowest score"){
        for(var i = 0; i < reviews.length; i++){
            reviews[i].style.order = reviews[i].children[0].getAttribute("score");
        }
    }
    if(term == "all systems"){
        return;
    }
    for(var i = 0; i < reviews.length; i++){
        if(term != reviews[i].children[0].getAttribute("system")){
            reviews[i].style.display = "none";
        }
    }
}

function sortSystem(){
    var reviews = document.getElementsByClassName("review-link");
    var s = document.getElementById("review-system");
    var v = s.options[s.selectedIndex].text;
    v = v.toLowerCase();
    if(v == "nintendo switch"){
        term = "switch";
    }
    if(v == "nintendo wii u"){
        term = "wii u";
    }
    if(v == "nintendo gamecube"){
        term = "gamecube";
    }
    if(v == "nintendo 3DS"){
        term = "3DS";
    }
    if(v == "all systems"){
        term = "all systems";
        return;
    }
    for(var i = 0; i < reviews.length; i++){
        if(term != reviews[i].children[0].getAttribute("system")){
            reviews[i].style.display = "none";
        }
    }
}
});