
let forCountDisplay=document.getElementById("count")
let count=0;

// for counter status here we can take 0/1 also;
let Counter_run=true;

function increment(){ 
    // below consition is True
    if(Counter_run){
        Counter_run=false;  // updating Counter status. Then Next time condition won'execute because we updated to false.
        started() // calling this function
    }
}
function started(){
        counterFunction= setInterval( function Counter(){
            count=count+1;
            forCountDisplay.innerHTML=`${count}`;
            } ,1000)
    
    
  
}

function tostop(){
    clearInterval(counterFunction);
    Counter_run=true;
    // here we are updating the Counter because after clicking the stop you may want to start again where it stoped.
    // Counter updated so Above if Condition get satisfied and it gets executs.
}

function reset(){
    clearInterval(counterFunction);
    count=count*0;
    forCountDisplay.innerHTML=''; 
}