 window.onload = function(){
    iloscSekcji =document.getElementsByTagName("article").length;
    sectTag=document.getElementsByTagName("article");
    document.body.style.margin = 30 + "px auto";
    pBar = document.getElementById("proBro");
    updateProgress(0);
};
//naciśnięcie przycisku 
document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if (keyCode == 39){
        clickedRight();
    }
    if (keyCode == 37){
        clickedLeft();
    }
}
var slajd = 0;
function clickedRight(){
    if (slajd < iloscSekcji){
        window.scrollTo(0, (sectTag[slajd+1].offsetTop));
        slajd++;
        updateProgress(slajd);
    }
}
function clickedLeft(){
    if (slajd<=0) { }
    else { slajd--;
        
        window.scrollTo(0, (sectTag[slajd].offsetTop));
        updateProgress(slajd);
    }
}