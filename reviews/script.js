$(document).ready(function(){
    sortReviews();
    $("#review-sort").change(function(){
        $(".review-link").fadeTo(200, 0).delay(200);
        setTimeout(sortReviews, 300);
        $(".review-link").fadeTo(200, 1);
    });


function sortReviews(){
    var reviews = document.getElementsByClassName("review-link");
    var names = [];
    var s = document.getElementById("review-sort");
    var v = s.options[s.selectedIndex].text;
    v = v.toLowerCase();
    if(v == "date"){
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
    if(v == "score"){
        for(var i = 0; i < reviews.length; i++){
            reviews[i].style.order = reviews[i].children[0].getAttribute("score") * -1;
        }
    }
}
});