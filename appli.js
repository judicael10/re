// let text = document.querySelector("h1");
// let conten = text.innerHTML;
// text.innerHTML = '';

// let index = 0;
// let timer = setInterval(function(){
//     if(index  < conten.length){
//         text.innerHTML += conten.charAt(index);
//         index++;
//     }
//     else{
//         clearInterval(timer)
//     }
// },100)

const text = document.querySelector(".sec-text");

const textloand = () =>{
    setTimeout(() => {
        text.textContent = "bleudo";
    },0);
    setTimeout(() => {
        text.textContent = "bresdelle";
    },4000);

    setTimeout(() => {
        text.textContent = "youtube";
    },8000
        
    );
}
textloand();
setInterval(textloand,120000)