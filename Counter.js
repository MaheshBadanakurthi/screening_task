
let forCountDisplay=document.getElementById("count")
let count=0;


function increment(){ 
    
  counterFunction= setInterval( function Counter(){
    count=count+1;
    forCountDisplay.innerHTML=` Counter : ${count}`;
    } ,1000)
}

function tostop(){
    clearInterval(counterFunction);
}

function reset(){
    clearInterval(counterFunction);
    count=count*0;
    forCountDisplay.innerHTML=''; 
}