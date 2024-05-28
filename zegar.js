
function zegar() {
    let teraz= new Date();
    let godzina= teraz.getHours();
    let minuta= teraz.getMinutes();
    let sekunda= teraz.getSeconds();
    // zegar 12h

    let czas="";
    czas+=  ((godzina<10)? '0' : '') + godzina;
    czas+= ((minuta<10)? ':0' : ':') + minuta;
    //czas+= ((sekunda<10)? ':0' : ':') + sekunda;
    

    let zegarTxt=document.querySelector('#txtZegar');
    zegarTxt.value=czas;
    //console.log(czas);
    setTimeout(zegar,1000);
}
function Data() {
    let now = new Date();
    let Year = now.getFullYear();
    let Month = now.getMonth() +1 ;  //if (Month<10 ) {".0" + Month} 
    let Month1 = ((Month<10)? '0' : '') +Month; 
    let Day = now.getDate();
    let txtData = document.getElementById("txtData");
        txtData.value = Day + "/"+Month1 + "/" + Year;

}

  let sec = 0;
let min = 0;
let mili=0;
let timerID; 

function stoper() {
    
    if (mili>=9) {
        sec+=1; mili=0;
    } else {
        mili+=1;
    }
    if (sec >= 60) {
        min += 1;
        sec = 0;
    } 
    let min1= ((min<10)? '0': '') +min;
    let sec1= ((sec<10)? '0': '') +sec; 
    let txtStoper = document.getElementById("txtStoper");
    txtStoper.value = min1 + ":" + sec1 ;
   
    }

function startStoper() {
    timerID = setInterval(stoper, 100); // Ustawiamy interwał na 100 ms
}

   

 








