'use strict'

$(document).ready(() => {
    window.onscroll = () => {
        makeSticky();
    };
    
    const navbar = document.getElementById('navBar');
    
    const sticky = navbar.offsetTop;
    
    const makeSticky = function makeNavbarSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
$("#purchase1").click(function (e){
    e.preventDefault();
    $("#fig1").css("display", "none");
    $("#hidden1").fadeIn();
    $("#hidden1").css("display", "block");
    
});
$("#b1").click(function(e){
    e.preventDefault();
    if($("#fig1").css("display") == "none"){
        alert("bought");
    }
});

$("#purchase2").click(function (e){
    e.preventDefault();
    $("#fig2").css("display", "none");
    $("#hidden2").fadeIn();
    $("#hidden2").css("display", "block");
    
});
$("#b2").click(function(e){
    e.preventDefault();
    if($("#fig2").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase3").click(function (e){
    e.preventDefault();
    $("#fig3").css("display", "none");
    $("#hidden3").fadeIn();
    $("#hidden3").css("display", "block");
    
});
$("#b3").click(function(e){
    e.preventDefault();
    if($("#fig3").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase4").click(function (e){
    e.preventDefault();
    $("#fig4").css("display", "none");
    $("#hidden4").fadeIn();
    $("#hidden4").css("display", "block");
    
});
$("#b4").click(function(e){
    e.preventDefault();
    if($("#fig4").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase5").click(function (e){
    e.preventDefault();
    $("#fig5").css("display", "none");
    $("#hidden5").fadeIn();
    $("#hidden5").css("display", "block");
    
});
$("#b5").click(function(e){
    e.preventDefault();
    if($("#fig5").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase6").click(function (e){
    e.preventDefault();
    $("#fig6").css("display", "none");
    $("#hidden6").fadeIn();
    $("#hidden6").css("display", "block");
    
});
$("#b6").click(function(e){
    e.preventDefault();
    if($("#fig6").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase7").click(function (e){
    e.preventDefault();
    $("#fig7").css("display", "none");
    $("#hidden7").fadeIn();
    $("#hidden7").css("display", "block");
    
});
$("#b7").click(function(e){
    e.preventDefault();
    if($("#fig7").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase8").click(function (e){
    e.preventDefault();
    $("#fig8").css("display", "none");
    $("#hidden8").fadeIn();
    $("#hidden8").css("display", "block");
    
});
$("#b8").click(function(e){
    e.preventDefault();
    if($("#fig8").css("display") == "none"){
        alert("bought");
    }
});
$("#purchase9").click(function (e){
    e.preventDefault();
    $("#fig9").css("display", "none");
    $("#hidden9").fadeIn();
    $("#hidden9").css("display", "block");  
});
$("#b9").click(function(e){
    e.preventDefault();
    if($("#fig9").css("display") == "none"){
        alert("bought");
    }
});

function minimize() {
    var navBar = document.getElementById("topNav");
    if (navBar.className == "navigation")
        navBar.className += " responsive";
    else
        navBar.className = "navigation";
}
}
    
);


