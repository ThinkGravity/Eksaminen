"use strict";

window.onload = function () {
    
    var projectImages = document.getElementsByClassName("profileProjectsImage");
    var popUpBox = document.getElementsByClassName('popUpBox');
    var popUpText = document.getElementsByClassName('popUpText');
    var popUpClose = document.getElementsByClassName('popUpClose');
    var popUpImage = document.getElementsByClassName('popUpImage');
    
    projectImages[0].onclick = function() {
        popUpBox[0].style.display='block';
        popUpImage[0].src = this.src;
        popUpText[0].innerHTML = this.alt;
    };
    
    projectImages[1].onclick = function() {
        popUpBox[0].style.display='block';
        popUpImage[0].src = this.src;
        popUpText[0].innerHTML = this.alt;
    };
    
    popUpClose[0].onclick = function() {
        popUpBox[0].style.display='none';
    };
    
};