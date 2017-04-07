$(document).ready(function(){
    $("#wrapper").fadeIn(250);
});

$(document).mouseup(function (e)
{
    var container = $("#options");

    if (!container.is(e.target)
        && container.has(e.target).length === 0 && !$("#optionsButton").is(e.target))
    {
        container.fadeOut(250);
    }
});

$(document).mouseup(function (e)
{
    var container = $(".dropdown-content");

    if (!container.is(e.target)
        && container.has(e.target).length === 0 && !$("#projectsButton").is(e.target))
    {
        container.fadeOut(250);
    }
});
$(function(){
    $("#optionClose").click(function(){
        var op = $("#options");
        if(op.is(":visible")){
            op.fadeOut(250);
        }
        else{
            op.fadeIn(250);
        }
    });
});
$(function(){
    $("#optionsButton").click(function(){
        var op = $("#options");
        if(op.is(":visible")){
            op.fadeOut(250);
        }
        else{
            op.fadeIn(250);
        }
    });
});
$(function(){
    $("#projectsButton").click(function(){
        var dc = $(".dropdown-content");
        if(dc.is(":visible")){
            dc.fadeOut(250);
        }
        else{
            dc.fadeIn(250);
        }
    });
});
$(function(){
    $("#documentsButton").click(function(){
        $("body").fadeOut(250);
        setTimeout(goToDocuments, 250);
        $(body).style.display = "none";
    });
});
$(function(){
    $("#aboutButton").click(function(){
        $("body").fadeOut(250);
        setTimeout(goToAbout, 250);
        $(body).style.display = "none";
    });
});
$(function(){
    $("#homeButton").click(function(){
        $("body").fadeOut(250);
        setTimeout(goToHome, 250);
        $(body).style.display = "none";
    });
});
$(function(){
    $("#smash").click(function(){
        goToSmash();
    });
});
function changeToBright(){
    document.getElementById("style").href = "brightStyle.css";
}
function changeToDefault(){
    document.getElementById("style").href = "style.css";
}
function goToSmash(){
    window.location.href = "characterSelector";
}
function goToDocuments(){
    window.location.href = "documentsPage.html";
}
function goToAbout(){
    window.location.href = "aboutPage.html";
}
function goToHome(){
    window.location.href = "index.html";
}
