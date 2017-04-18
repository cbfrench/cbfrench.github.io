$(document).ready(function(){
    //style();
    $("#wrapper").fadeIn(250);
});


$(document).mouseup(function (e)
{
    var container = $("#optionMenu");

    if (!container.is(e.target)
        && container.has(e.target).length === 0 && !$("#optionsButton").is(e.target))
    {
        $("#options").fadeOut(250);
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
$(function(){
    $("#allsafe").click(function(){
        window.location = "http://www.allsafeselfstorage.com";
    });
});
$(function(){
    $("#sleepAid").click(function(){
        goToSleep();
    });
});/*
function style(){
    if(localStorage.getItem("bright") != null){
        var page = window.location.href;
        if(localStorage.getItem("bright") == 1){
            if(page.includes("index.html")){
                document.getElementById("style").href = "brightStyle.css";
            }
            if(page.includes("aboutPage.html")){
                document.getElementById("style").href = "brightAboutStyle.css";
            }
            if(page.includes("documentsPage.html")){
                document.getElementById("style").href = "brightDocumentsStyle.css";
            }
            document.getElementById("defaultRadio").checked = false;
            document.getElementById("brightRadio").checked = true;
        }
        else{
            if(page.includes("index.html")){
                document.getElementById("style").href = "style.css";
            }
            if(page.includes("aboutPage.html")){
                document.getElementById("style").href = "aboutStyle.css";
            }
            if(page.includes("documentsPage.html")){
                document.getElementById("style").href = "documentsStyle.css";
            }
            document.getElementById("brightRadio").checked = false;
            document.getElementById("defaultRadio").checked = true;
        }
    }   
}
function changeToBright(){
    var sheet = document.getElementById("style").href;
    if(sheet.includes("style.css")){
        document.getElementById("style").href = "brightStyle.css";
    }
    if(sheet.includes("aboutStyle.css")){
        document.getElementById("style").href = "brightAboutStyle.css";
    }
    if(sheet.includes("documentsStyle.css")){
        document.getElementById("style").href = "brightDocumentsStyle.css";
    }
    localStorage.setItem("bright", 1);
}
function changeToDefault(){
    var sheet = document.getElementById("style").href;
    if(sheet.includes("brightStyle.css")){
        document.getElementById("style").href = "style.css";
    }
    if(sheet.includes("brightAboutStyle.css")){
        document.getElementById("style").href = "aboutStyle.css";
    }
    if(sheet.includes("brightDocumentsStyle.css")){
        document.getElementById("style").href = "documentsStyle.css";
    }
    localStorage.setItem("bright", 0);
}*/
function goToSleep(){
    window.location.href = "sleepAid";
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
