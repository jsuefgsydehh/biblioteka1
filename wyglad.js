
document.addEventListener("DOMContentLoaded", function() {
  const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGTH = document.querySelector(".popup__arrow--rigth");

let CurrnetImgIndex;

//po kliknięciu na zdjęcie ono się otwiera
THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
         POPUP.classList.remove("hidden"); //podajemy nazwę klasy a nie selektor
       //console.log(e.target.src);
       POPUP_IMG.src=e.target.src;
       CurrnetImgIndex = index; //wyswietla numer obrazka
       console.log(CurrnetImgIndex); 
        });
}); 
//po kliknięciu na krzyżyk zdjęcie sie zamika
POPUP_CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
    //console.log("x");
});


//przewijanie zdjęć przy pomocy strzałek
ARROW_LEFT.addEventListener("click", () => {
  //console.log("<");
  if (CurrnetImgIndex === 0 ) {
    CurrnetImgIndex = THUMBNAILS.length - 1;
  }  
  else  {
    CurrnetImgIndex --;
  }
  
  POPUP_IMG.src = THUMBNAILS[CurrnetImgIndex].src

});
  
ARROW_RIGTH.addEventListener("click", () => {
  //console.log(">");
  if (CurrnetImgIndex === THUMBNAILS.length - 1 ) {
    CurrnetImgIndex = 0;
  }  
  else  {
    CurrnetImgIndex ++;
  }
  
  POPUP_IMG.src = THUMBNAILS[CurrnetImgIndex].src;
  
});


});