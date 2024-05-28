function Words(pages,WordInPages) {
    let wynik=pages * WordInPages;
    let elem_words = document.getElementById("words");
    elem_words.value= wynik;
}

//pole(10,12);

let btnObwod=document.querySelector("#btnObwod");
// alert(btnObwod.value); // działa

btnObwod.onclick= function () {
    let bokA= document.querySelector("#txtA").value;
    let bokB= document.querySelector("#txtB").value;
    let obwod= 2 * Number(bokA) + 2 * Number(bokB);
    let divW= document.querySelector("#divWynik");
    let przek= Math.sqrt(Math.pow(Number(bokA),2)+Math.pow(Number(bokB),2)).toFixed(4);
    divW.innerHTML= `Obwód wynosi: ${obwod} <br>
    Przekatna wynosi:  ${przek}`;
}