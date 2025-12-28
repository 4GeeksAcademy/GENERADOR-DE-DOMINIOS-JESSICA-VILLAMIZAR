import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// lista de palabras

let pronombres = ['the', 'our', 'my'];
let adjetivos = ['great', 'big', 'best', 'smart'];
let sustantivos = ['jogger', 'racoon', 'developer', 'coder', 'genius'];
let extensiones = ['.com', '.net', '.us', '.io', '.org', '.dev']; 



pronombres.forEach(pron => {
 adjetivos.forEach(adj => {
  sustantivos.forEach(sust => {
      let nombreDeDominios = pron+ adj+ sust ; 
         extensiones.forEach(ext => {
            if(sust.endsWith(ext.slice(1))){
               console.log(pron+ adj+sust.slice(0,-ext.slice(1).length)+ ext)
               
            } else{
              let nombreDeDominiosConExt = nombreDeDominios + ext;
              console.log(nombreDeDominiosConExt)
            }
             

         })
      })
   })
});