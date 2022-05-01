
//COKI

const $boton=document.getElementById("boton"),
$puertaiz=document.getElementById("puerta-iz"),
$puertader=document.getElementById("puerta-der");

$snow1=document.getElementById("snow-1"),
$snow2=document.getElementById("snow-2");

$boton.onclick=function(){
    
    $puertaiz.classList.toggle("running");
    $puertader.classList.toggle("running");
    $snow1.classList.toggle("running");
    $snow2.classList.toggle("running");
   }

   //vinculando animation con video

   function iniciar() { 
    //var boton=document.getElementById('boton'); 
    $boton.addEventListener('click', presionar, false); 
 } 
 function presionar() { 
     if(!video.paused && !video.ended)   { 
        video.pause(); 
        reproducir.value="Reproducir"; 
     
     } 
     else 
     { 
        video.play(); 
        reproducir.value="Pausar"; 
          
     } 
    
  } 
 window.addEventListener('load', iniciar, false); 
  