const result =document.getElementById('result');

const  equals =document.getElementById('equate');

const clear =document.getElementById('delete-btn');




function display( val) {
   result.value+=val;
   
}

function equate( ) {
 let x = result.value;
 let y = eval(x);
 
 result.value = y;
}


 function clr() {
    result.value =" "; 
}
