"use strict";

window.onload = function () {
    
    var projectImages = document.getElementsByClassName("projectsImage");
    var popUpBox = document.getElementsByClassName('popUpBox');
    var popUpText = document.getElementsByClassName('popUpText');
    var popUpClose = document.getElementsByClassName('popUpClose');
    var popUpImage = document.getElementsByClassName('popUpImage');
    
    var i;
    for (i = 0; i < projectImages.length; i++) { 
        projectImages[i].onclick = function() {
            popUpBox[0].style.display='block';
            popUpImage[0].src = this.src;
            popUpText[0].innerHTML = this.alt;
        };
    }
    
    popUpClose[0].onclick = function() {
        popUpBox[0].style.display='none';
    };
    
};